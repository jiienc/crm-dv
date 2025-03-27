import { apiGetUsersList } from '@/services/usercontroluseraccess-components/users/UsersService'
import useSWR from 'swr'
import { useUsersListStore } from '../store/usersListStore'
import type { GetUsersListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useUsersList() {
  const {
    tableData,
    setTableData,
    selectedUsers,
    setSelectedUsers,
    setSelectAllUsers,
  } = useUsersListStore((state) => state)

  const { data, error, isLoading, mutate } = useSWR(
    ['/resource/User', { ...tableData }],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, params]) =>
      apiGetUsersList<GetUsersListResponse, TableQueries>(params),
    {
      revalidateOnFocus: false,
    },
  )

  const usersList = data?.data || []

  const usersListTotal = data?.total || usersList.length || 0

  return {
    usersList,
    usersListTotal,
    error,
    isLoading,
    tableData,
    mutate,
    setTableData,
    selectedUsers,
    setSelectedUsers,
    setSelectAllUsers,
  }
}
