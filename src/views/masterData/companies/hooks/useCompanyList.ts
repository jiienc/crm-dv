import { apiGetCompanyList } from '@/services/masterdata-components/companies/CompaniesService'
import useSWR from 'swr'
import { useCompanyListStore } from '../store/companyListStore'
import type { TableQueries } from '@/@types/common'
import { GetCompanyListResponse } from '../types'

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetCompanyList<GetCompanyListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const companyList = data?.data || []
  const companyListTotal = data?.total || companyList.length || 0

  return {
    companyList,
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
