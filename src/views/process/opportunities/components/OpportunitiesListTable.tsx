import { useMemo } from 'react'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useOpportunitiesList from '../hooks/useOpportunitiesList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Opportunities } from '../types'
import type { TableQueries } from '@/@types/common'

const statusColor: Record<string, string> = {
    Open: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
    Contacted: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
}

const NameColumn = ({ row }: { row: Opportunities }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/oppurtunities/oppurtunities-details/${row.name}`}
      >
        {row.company}
      </Link>
    </div>
  )
}

const StageColumn = ({ row }: { row: Opportunities }) => {
  return (
    <div className="flex items-center">
      <p>{row.sales_stage}</p>
    </div>
  )
}

const OpportunityColumn = ({ row }: { row: Opportunities }) => {
  return (
    <div className="flex items-center">
      <p>{row.opportunity_type}</p>
    </div>
  )
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

const OpportunitiesListTable = () => {
  const navigate = useNavigate()

  const {
    opportunitiesList,
    opportunitiesListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllOpportunities,
    setSelectedOpportunities,
    selectedOpportunities,
  } = useOpportunitiesList()

  const handleEdit = (opportunities: Opportunities) => {
    navigate(`/concepts/oppurtunities/oppurtunities-edit/${opportunities.name}`)
  }

  const handleViewDetails = (opportunities: Opportunities) => {
    navigate(`/concepts/oppurtunities/oppurtunities-details/${opportunities.name}`)
  }

  const columns: ColumnDef<Opportunities>[] = useMemo(
    () => [
      {
        header: 'Company',
        accessorKey: 'company',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Stage',
        accessorKey: 'sales_stage',
        cell: (props) => {
          const row = props.row.original
          return <StageColumn row={row} />
        },
      },
      {
        header: 'Opportunity',
        accessorKey: 'opportunity_type',
        cell: (props) => {
          const row = props.row.original
          return <OpportunityColumn row={row} />
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
    if (selectedOpportunities.length > 0) {
      setSelectAllOpportunities([])
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

  const handleRowSelect = (checked: boolean, row: Opportunities) => {
    setSelectedOpportunities(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Opportunities>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllOpportunities(originalRows)
    } else {
      setSelectAllOpportunities([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={opportunitiesList}
      noData={!isLoading && opportunitiesList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: opportunitiesListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedOpportunities.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default OpportunitiesListTable
