import { useMemo } from 'react'
import Tooltip from '@/components/ui/Tooltip'
import Tag from '@/components/ui/Tag'
import DataTable from '@/components/shared/DataTable'
import useLeadsList from '../hooks/useLeadsList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Leads } from '../types'
import type { TableQueries } from '@/@types/common'

const CompanyNameColumn = ({ row }: { row: Leads }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/leads/leads-details/${row.name}`}
      >
        {row.title}
      </Link>
    </div>
  )
}

const statusColor: Record<string, string> = {
  Open: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
  Contacted: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
}

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

const LeadsListTable = () => {
  const navigate = useNavigate()

  const {
    leadsList,
    leadsListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllLeads,
    setSelectedLeads,
    selectedLeads,
  } = useLeadsList()

  const handleEdit = (leads: Leads) => {
    navigate(`/concepts/leads/leads-edit/${leads.name}`)
  }

  const handleViewDetails = (leads: Leads) => {
    navigate(`/concepts/leads/leads-details/${leads.name}`)
  }

  const columns: ColumnDef<Leads>[] = useMemo(
    () => [
      {
        header: 'Title',
        accessorKey: 'title',
        cell: (props) => {
          const row = props.row.original
          return <CompanyNameColumn row={row} />
        },
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props) => {
          const row = props.row.original
          return (
            <div className="flex items-center">
              <Tag className={statusColor[row.status]}>
                <span className="capitalize">{row.status}</span>
              </Tag>
            </div>
          )
        },
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
    if (selectedLeads.length > 0) {
      setSelectAllLeads([])
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

  const handleRowSelect = (checked: boolean, row: Leads) => {
    setSelectedLeads(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Leads>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllLeads(originalRows)
    } else {
      setSelectAllLeads([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={leadsList}
      noData={!isLoading && leadsList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: leadsListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedLeads.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default LeadsListTable
