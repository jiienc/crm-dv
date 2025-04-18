import { useMemo } from 'react'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useQuotationList from '../hooks/useQuotationList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Quotation } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: Quotation }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/quotation/quotation-details/${row.name}`}
      >
        {row.name}
      </Link>
    </div>
  )
}

// const OpportunityColumn = ({ row }: { row: Quotation }) => {
//   return (
//     <div className="flex items-center">
//       <p>{row.opportunity}</p>
//     </div>
//   )
// }

// const PicColumn = ({ row }: { row: Quotation }) => {
//   return (
//     <div className="flex items-center">
//       <p>{row.pic}</p>
//     </div>
//   )
// }

// const PoColumn = ({ row }: { row: Quotation }) => {
//   return (
//     <div className="flex items-center">
//       <p>{row.po_number}</p>
//     </div>
//   )
// }

// const SoColumn = ({ row }: { row: Quotation }) => {
//   return (
//     <div className="flex items-center">
//       <p>{row.so_number}</p>
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

const QuotationListTable = () => {
  const navigate = useNavigate()

  const {
    quotationList,
    quotationListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllQuotation,
    setSelectedQuotation,
    selectedQuotation,
  } = useQuotationList()

  const handleEdit = (quotation: Quotation) => {
    navigate(`/concepts/quotation/quotation-edit/${quotation.name}`)
  }

  const handleViewDetails = (quotation: Quotation) => {
    navigate(`/concepts/quotation/quotation-details/${quotation.name}`)
  }

  const columns: ColumnDef<Quotation>[] = useMemo(
    () => [
      {
        header: 'Quotation Number',
        accessorKey: 'quotation_number',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Opportunity',
        accessorKey: 'opportunity',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <OpportunityColumn row={row} />
        // },
      },
      {
        header: 'PIC',
        accessorKey: 'pic',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <PicColumn row={row} />
        // },
      },
      {
        header: 'PO Number',
        accessorKey: 'po_number',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <PoColumn row={row} />
        // },
      },
      {
        header: 'SO Number',
        accessorKey: 'so_number',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <SoColumn row={row} />
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
    if (selectedQuotation.length > 0) {
      setSelectAllQuotation([])
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

  const handleRowSelect = (checked: boolean, row: Quotation) => {
    setSelectedQuotation(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Quotation>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllQuotation(originalRows)
    } else {
      setSelectAllQuotation([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={quotationList}
      noData={!isLoading && quotationList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: quotationListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedQuotation.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default QuotationListTable
