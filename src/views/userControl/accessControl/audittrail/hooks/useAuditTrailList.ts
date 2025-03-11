import { apiGetAuditTrailList } from '@/services/usercontroluseraccess-components/audittrail/AuditTrailService'
import useSWR from 'swr'
import { useAuditTrailListStore } from '../store/audittrailListStore'
import type { GetAuditTrailListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useAuditTrailList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedAuditTrail,
        setSelectedAuditTrail,
        setSelectAllAuditTrail,
        setFilterData,
    } = useAuditTrailListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/audittrail', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetAuditTrailList<GetAuditTrailListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const audittrailList = data?.list || []

    const audittrailListTotal = data?.total || 0

    return {
        audittrailList,
        audittrailListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedAuditTrail,
        setSelectedAuditTrail,
        setSelectAllAuditTrail,
        setFilterData,
    }
}
