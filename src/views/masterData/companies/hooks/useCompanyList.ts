import { apiGetCompaniesList } from '@/services/masterdata-components/companies/CompaniesService'
import useSWR from 'swr'
import { useCompanyListStore } from '../store/companyListStore'
import type { GetCompaniesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCompanyList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCompany,
        setSelectedCompany,
        setSelectAllCompany,
        setFilterData,
    } = useCompanyListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/companies', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCompaniesList<GetCompaniesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const companyList = data?.list || []

    const companyListTotal = data?.total || 0

    return {
        companyList,
        companyListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCompany,
        setSelectedCompany,
        setSelectAllCompany,
        setFilterData,
    }
}
