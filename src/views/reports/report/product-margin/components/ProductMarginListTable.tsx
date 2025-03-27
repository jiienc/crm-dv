import { useMemo } from 'react'
import DataTable from '@/components/shared/DataTable'
import useAttendanceList from '../hooks/useAttendanceList'
import cloneDeep from 'lodash/cloneDeep'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Attendance } from '../types'
import type { TableQueries } from '@/@types/common'

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
        header: 'Product Code',
        accessorKey: 'product_code',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'SBU Name',
        accessorKey: 'sbu_name',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'QTY Unit (MT)',
        accessorKey: 'qty_unit',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Previous QTY Unit (MT)',
        accessorKey: 'previous_qty_unit',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Sales(USD)',
        accessorKey: 'sales',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Delta P',
        accessorKey: 'delta_p',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Current Perunit Delta P',
        accessorKey: 'current_perunit_delta_p',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Previous Perunit Delta P',
        accessorKey: 'previous_perunit_delta_p',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Inc/Dec Perunit Delta P',
        accessorKey: 'incdec_perunit_delta_p',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Current Period Margin',
        accessorKey: 'current_period_margin',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Inc/Dec Previous Margin',
        accessorKey: 'incdec_previous_margin',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
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
