import { apiGetTicketsList } from '@/services/process-components/tickets/TicketsService'
import useSWR from 'swr'
import { useTicketsListStore } from '../store/ticketsListStore'
import type { GetTicketsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useTicketsList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedTickets,
        setSelectedTickets,
        setSelectAllTickets,
        setFilterData,
    } = useTicketsListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/tickets', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetTicketsList<GetTicketsListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const ticketsList = data?.list || []

    const ticketsListTotal = data?.total || 0

    return {
        ticketsList,
        ticketsListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedTickets,
        setSelectedTickets,
        setSelectAllTickets,
        setFilterData,
    }
}
