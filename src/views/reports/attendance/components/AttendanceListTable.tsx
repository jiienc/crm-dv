import { useMemo } from 'react'
import DataTable from '@/components/shared/DataTable'
import useAttendanceList from '../hooks/useAttendanceList'
import { Link } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Attendance } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: Attendance }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/attendance/attendance-details/${row.name}`}
      >
        {row.name}
      </Link>
    </div>
  )
}

const AttendanceListTable = () => {
  const {
    attendanceList,
    attendanceListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllAttendance,
    setSelectedAttendance,
    selectedAttendance,
  } = useAttendanceList()

  const columns: ColumnDef<Attendance>[] = useMemo(
    () => [
      {
        header: 'Fullname',
        accessorKey: 'name',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'On Time',
        accessorKey: 'ontime',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Checked In',
        accessorKey: 'checked_in',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Late Checkin',
        accessorKey: 'late_checkin',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Early Checkout',
        accessorKey: 'early_checkout',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Late and Early',
        accessorKey: 'late_and_early',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Active Days',
        accessorKey: 'active_days',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      }
    ],
    [],
  )

  const handleSetTableData = (data: TableQueries) => {
    setTableData(data)
    if (selectedAttendance.length > 0) {
      setSelectAllAttendance([])
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

  const handleRowSelect = (checked: boolean, row: Attendance) => {
    setSelectedAttendance(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Attendance>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllAttendance(originalRows)
    } else {
      setSelectAllAttendance([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={attendanceList}
      noData={!isLoading && attendanceList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: attendanceListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedAttendance.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default AttendanceListTable
