import { apiGetCompanyList } from '@/services/masterdata-components/companies/CompaniesService'
import useSWR from 'swr'
import { useCompanyListStore } from '../store/companyListStore'
import type { TableQueries } from '@/@types/common'

export default function useCompanyList() {
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
        async ([_, params]) => {
          try {
            return await apiGetCompanyList<TableQueries>(params)
          } catch (err) {
            console.error('Error fetching leads:', err)
            throw err
          }
        },
        {
          revalidateOnFocus: false,
        },
      )

      const companyList = data?.data ?? []
      const companyListTotal = companyList.length

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
