import { useMemo } from 'react'
import DataTable from '@/components/shared/DataTable'
import useAuditTrailList from '../hooks/useAuditTrailList'
import { Link } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { AuditTrail } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: AuditTrail }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/audittrail/audittrail-details/${row.name}`}
      >
        {row.name}
      </Link>
    </div>
  )
}

const AuditTrailListTable = () => {
  const {
    audittrailList,
    audittrailListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllAuditTrail,
    setSelectedAuditTrail,
    selectedAuditTrail,
  } = useAuditTrailList()

  const columns: ColumnDef<AuditTrail>[] = useMemo(
    () => [
      {
        header: 'Fullname',
        accessorKey: 'fullname',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Activity',
        accessorKey: 'activity',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <ActivityColumn row={row} />
        // },
      },
      {
        header: 'Modul',
        accessorKey: 'modul',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <ModulColumn row={row} />
        // },
      },
      {
        header: 'Date',
        accessorKey: 'date',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <DateColumn row={row} />
        // },
      },
    ],
    [],
  )

  const handleSetTableData = (data: TableQueries) => {
    setTableData(data)
    if (selectedAuditTrail.length > 0) {
      setSelectAllAuditTrail([])
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

  const handleRowSelect = (checked: boolean, row: AuditTrail) => {
    setSelectedAuditTrail(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<AuditTrail>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllAuditTrail(originalRows)
    } else {
      setSelectAllAuditTrail([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={audittrailList}
      noData={!isLoading && audittrailList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: audittrailListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedAuditTrail.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default AuditTrailListTable
