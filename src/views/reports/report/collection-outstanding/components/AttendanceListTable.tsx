import { useMemo } from 'react'
import DataTable from '@/components/shared/DataTable'
import useCollectionOutstandingList from '../hooks/useCollectionOutstandingList'
import { Link } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { CollectionOutstanding } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: CollectionOutstanding }) => {
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
    collectionOutstandingList,
    collectionOutstandingListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllCollectionOutstanding,
    setSelectedCollectionOutstanding,
    selectedCollectionOutstanding,
  } = useCollectionOutstandingList()

  const date = new Date();
const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(date.getFullYear(), date.getMonth() - 1));
const year = date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear();

const month1 = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(date.getFullYear(), date.getMonth() - 2));
const year1 = date.getMonth() <= 1 ? date.getFullYear() - 1 : date.getFullYear();

  const columns: ColumnDef<CollectionOutstanding>[] = useMemo(
    () => [
      {
        header: 'Customer Name',
        accessorKey: 'customer_name',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Consecutive Months',
        accessorKey: 'consecutive_months',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: `AVG Coll ${month} ${year}`,
        accessorKey: 'avg_coll',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: `AVG Coll ${month1} ${year1}`,
        accessorKey: 'avg_coll1',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Receipt Amount',
        accessorKey: 'receipt_amount',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Outstanding AR',
        accessorKey: 'outstanding_ar',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      }
    ],
    [month, month1, year, year1],
  )

  const handleSetTableData = (data: TableQueries) => {
    setTableData(data)
    if (selectedCollectionOutstanding.length > 0) {
      setSelectAllCollectionOutstanding([])
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

  const handleRowSelect = (checked: boolean, row: CollectionOutstanding) => {
    setSelectedCollectionOutstanding(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<CollectionOutstanding>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllCollectionOutstanding(originalRows)
    } else {
      setSelectAllCollectionOutstanding([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={collectionOutstandingList}
      noData={!isLoading && collectionOutstandingList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: collectionOutstandingListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedCollectionOutstanding.some((selected) => selected.name === row.name)
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
