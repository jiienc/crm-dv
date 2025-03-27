import { apiGetTicketsList } from '@/services/process-components/tickets/TicketsService'
import useSWR from 'swr'
import { useTicketsListStore } from '../store/ticketsListStore'
import type { GetTicketsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useTicketsList() {
  const {
    tableData,
    setTableData,
    selectedTickets,
    setSelectedTickets,
    setSelectAllTickets,
  } = useTicketsListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/Ticket', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetTicketsList<GetTicketsListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const ticketsList = data?.data || []

  const ticketsListTotal = data?.total || ticketsList.length || 0

  return {
    ticketsList,
    ticketsListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedTickets,
    setSelectedTickets,
    setSelectAllTickets,
  }
}
