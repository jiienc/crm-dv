import { apiGetUsersList } from '@/services/usercontroluseraccess-components/users/UsersService'
import useSWR from 'swr'
import { useUsersListStore } from '../store/usersListStore'
import type { GetUsersListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useUsersList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedUsers,
        setSelectedUsers,
        setSelectAllUsers,
        setFilterData,
    } = useUsersListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/users', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetUsersList<GetUsersListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const usersList = data?.list || []

    const usersListTotal = data?.total || 0

    return {
        usersList,
        usersListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedUsers,
        setSelectedUsers,
        setSelectAllUsers,
        setFilterData,
    }
}
