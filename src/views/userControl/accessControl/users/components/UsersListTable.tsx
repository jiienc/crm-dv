import { useMemo } from 'react'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useUsersList from '../hooks/useUsersList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Users } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: Users }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/users/users-details/${row.name}`}
      >
        {row.username}
      </Link>
    </div>
  )
}

const EmailColumn = ({ row }: { row: Users }) => {
  return (
    <div className="flex items-center">
      <p>{row.email}</p>
    </div>
  )
}

const PhoneColumn = ({ row }: { row: Users }) => {
  return (
    <div className="flex items-center">
      <p>{row.phone}</p>
    </div>
  )
}

const FullnameColumn = ({ row }: { row: Users }) => {
  return (
    <div className="flex items-center">
      <p>{row.full_name}</p>
    </div>
  )
}

const AccessGroupColumn = ({ row }: { row: Users }) => {
  return (
    <div className="flex items-center">
      <p>{row.role_profile_name}</p>
    </div>
  )
}

// const HierarchyColumn = ({ row }: { row: Users }) => {
//   return (
//     <div className="flex items-center">
//       <p>{row.hierarchy}</p>
//     </div>
//   )
// }

const ActionColumn = ({
  onEdit,
  onViewDetail,
}: {
  onEdit: () => void
  onViewDetail: () => void
}) => {
  return (
    <div className="flex items-center gap-3">
      <Tooltip title="Edit">
        <div
          className={`text-xl cursor-pointer select-none font-semibold`}
          role="button"
          onClick={onEdit}
        >
          <TbPencil />
        </div>
      </Tooltip>
      <Tooltip title="View">
        <div
          className={`text-xl cursor-pointer select-none font-semibold`}
          role="button"
          onClick={onViewDetail}
        >
          <TbEye />
        </div>
      </Tooltip>
    </div>
  )
}

const UsersListTable = () => {
  const navigate = useNavigate()

  const {
    usersList,
    usersListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllUsers,
    setSelectedUsers,
    selectedUsers,
  } = useUsersList()

  const handleEdit = (users: Users) => {
    navigate(`/concepts/users/users-edit/${users.name}`)
  }

  const handleViewDetails = (users: Users) => {
    navigate(`/concepts/users/users-details/${users.name}`)
  }

  const columns: ColumnDef<Users>[] = useMemo(
    () => [
      {
        header: 'Username',
        accessorKey: 'username',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: (props) => {
          const row = props.row.original
          return <EmailColumn row={row} />
        },
      },
      {
        header: 'Phone',
        accessorKey: 'email',
        cell: (props) => {
          const row = props.row.original
          return <PhoneColumn row={row} />
        },
      },
      {
        header: 'Fullname',
        accessorKey: 'full_name',
        cell: (props) => {
          const row = props.row.original
          return <FullnameColumn row={row} />
        },
      },
      {
        header: 'Access Group',
        accessorKey: 'role_profile_name',
        cell: (props) => {
          const row = props.row.original
          return <AccessGroupColumn row={row} />
        },
      },
      {
        header: 'Hierarchy',
        accessorKey: 'hierarchy',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <HierarchyColumn row={row} />
        // },
      },
      {
        header: 'Action',
        id: 'action',
        cell: (props) => (
          <ActionColumn
            onEdit={() => handleEdit(props.row.original)}
            onViewDetail={() => handleViewDetails(props.row.original)}
          />
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const handleSetTableData = (data: TableQueries) => {
    setTableData(data)
    if (selectedUsers.length > 0) {
      setSelectAllUsers([])
    }
  }

  const handlePaginationChange = (page: number) => {
    const newTableData = cloneDeep(tableData)
    newTableData.pageIndex = page
    handleSetTableData(newTableData)
  }

  const handleSelectChange = (value: number) => {
    const newTableData = cloneDeep(tableData)
    newTableData.pageSize = Number(value)
    newTableData.pageIndex = 1
    handleSetTableData(newTableData)
  }

  const handleSort = (sort: OnSortParam) => {
    const newTableData = cloneDeep(tableData)
    newTableData.sort = sort
    handleSetTableData(newTableData)
  }

  const handleRowSelect = (checked: boolean, row: Users) => {
    setSelectedUsers(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Users>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllUsers(originalRows)
    } else {
      setSelectAllUsers([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={usersList}
      noData={!isLoading && usersList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: usersListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedUsers.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default UsersListTable
