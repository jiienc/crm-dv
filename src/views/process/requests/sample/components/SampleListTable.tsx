import { useMemo } from 'react'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useSampleList from '../hooks/useSampleList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Sample } from '../types'
import type { TableQueries } from '@/@types/common'

const statusColor: Record<string, string> = {
  active: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
  blocked: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
}

const NameColumn = ({ row }: { row: Sample }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/sample/sample-details/${row.name}`}
      >
        {row.name}
      </Link>
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

const SampleListTable = () => {
  const navigate = useNavigate()

  const {
    sampleList,
    sampleListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllSample,
    setSelectedSample,
    selectedSample,
  } = useSampleList()

  const handleEdit = (sample: Sample) => {
    navigate(`/concepts/sample/sample-edit/${sample.name}`)
  }

  const handleViewDetails = (sample: Sample) => {
    navigate(`/concepts/sample/sample-details/${sample.name}`)
  }

  const columns: ColumnDef<Sample>[] = useMemo(
    () => [
      {
        header: 'Product Code',
        accessorKey: 'product_code',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Company',
        accessorKey: 'company',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'Assigned',
        accessorKey: 'assigned',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
      },
      {
        header: 'PIC',
        accessorKey: 'pic',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
        // },
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
    if (selectedSample.length > 0) {
      setSelectAllSample([])
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

  const handleRowSelect = (checked: boolean, row: Sample) => {
    setSelectedSample(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Sample>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllSample(originalRows)
    } else {
      setSelectAllSample([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={sampleList}
      noData={!isLoading && sampleList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: sampleListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedSample.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default SampleListTable
