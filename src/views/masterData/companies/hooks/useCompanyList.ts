import { useState, useEffect } from 'react'
import useSWR from 'swr'
import {
  apiGetCompanyList,
  apiGetAllContact,
  apiGetLinked,
  apiGetAssigned,
} from '@/services/masterdata-components/companies/CompaniesService'
import { useCompanyListStore } from '../store/companyListStore'
import type { TableQueries } from '@/@types/common'
import type {
  GetCompanyListResponse,
  AllContactResponse,
  LinkedItem,
  LinkedResponse,
  ToDoResponse,
} from '../types'

const useCompanyList = () => {
  const {
    tableData,
    setTableData,
    selectedCompany,
    setSelectedCompany,
    setSelectAllCompany,
  } = useCompanyListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Company', { ...tableData }],
    ([, params]) =>
      apiGetCompanyList<GetCompanyListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const companyList = data?.data || []
  const companyListTotal = data?.total || companyList.length || 0

  // Fetch all contacts
  const { data: allContact } = useSWR<
    AllContactResponse,
    unknown,
    [string, Record<string, unknown>]
  >(['/resource/Contact', {}], ([, params]) => apiGetAllContact(params), {
    revalidateOnFocus: false,
  })

  // Fetch links
  const [linkedArray, setLinkedArray] = useState<LinkedResponse[]>([])

  useEffect(() => {
    const fetchAllLinked = async () => {
      const contactNames =
        allContact?.data?.map((contact) => contact.name) || []
  
      if (!contactNames.length) return
  
      const results = await Promise.all(
        contactNames.map(async (contact) => {
          try {
            const res: LinkedResponse = await apiGetLinked({}, contact)
            const links = res?.data?.links || []
  
            // Filter only "Company" links and return enriched info
            const companyLinks = links
              .filter((link: LinkedItem) => link.link_doctype === 'Company')
              .map((link: LinkedItem) => ({
                company: link.link_name,
                contact: link.parent,
              }))
  
            return companyLinks.length ? companyLinks : null
          } catch (error) {
            console.error('Error fetching linked data for', contact, error)
            return null
          }
        })
      )
  
      const filtered = results.filter(
        (link: LinkedItem) => Array.isArray(link) && link.length > 0
      )
  
      // Flatten and set the filtered links
      setLinkedArray(filtered.flat())
    }
  
    fetchAllLinked()
  }, [allContact])

  // Fetch ToDo
  const { data: todoData } = useSWR<
    ToDoResponse,
    unknown,
    [string, Record<string, unknown>]
  >(['/resource/ToDo', {}], ([, params]) => apiGetAssigned(params), {
    revalidateOnFocus: false,
  })

  // Assign column
  const assignedColumn = companyList.map((company) => {
    const assigned: string[] = []

    if (todoData?.data && Array.isArray(todoData.data)) {
      for (const todo of todoData.data) {
        if (
          todo.reference_name === company.company_name &&
          todo.reference_type === 'Company'
        ) {
          assigned.push(todo.assigned_by_full_name)
        }
      }
    }

    const match = linkedArray.find(
      (link) => link.company === company.company_name
    )

    return {
      ...company,
      assigned,
      pic: match?.contact
    }
  })

  return {
    companyList: assignedColumn,
    companyListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedCompany,
    setSelectedCompany,
    setSelectAllCompany,
  }
}

export default useCompanyList
