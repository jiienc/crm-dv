import { apiGetAuditTrailList } from '@/services/usercontroluseraccess-components/audittrail/AuditTrailService'
import useSWR from 'swr'
import { useAuditTrailListStore } from '../store/audittrailListStore'
import type { GetAuditTrailListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useAuditTrailList() {
    const {
        tableData,
        setTableData,
        selectedAuditTrail,
        setSelectedAuditTrail,
        setSelectAllAuditTrail,
    } = useAuditTrailListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/audittrail', { ...tableData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetAuditTrailList<GetAuditTrailListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const audittrailList = data?.data || []

    const audittrailListTotal = data?.total || audittrailList.length || 0

    return {
        audittrailList,
        audittrailListTotal,
        error,
        isLoading,
        tableData,
        mutate,
        setTableData,
        selectedAuditTrail,
        setSelectedAuditTrail,
        setSelectAllAuditTrail,
    }
}
