import { useMemo } from 'react'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useNewProductList from '../hooks/useNewProductList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { NewProduct } from '../types'
import type { TableQueries } from '@/@types/common'

const statusColor: Record<string, string> = {
    active: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
    blocked: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
}

const NameColumn = ({ row }: { row: NewProduct }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/newproduct/newproduct-details/${row.name}`}
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

const NewProductListTable = () => {
  const navigate = useNavigate()

  const {
    newproductList,
    newproductListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllNewProduct,
    setSelectedNewProduct,
    selectedNewProduct,
  } = useNewProductList()

  const handleEdit = (newproduct: NewProduct) => {
    navigate(`/concepts/newproduct/newproduct-edit/${newproduct.name}`)
  }

  const handleViewDetails = (newproduct: NewProduct) => {
    navigate(`/concepts/newproduct/newproduct-details/${newproduct.name}`)
  }

  const columns: ColumnDef<NewProduct>[] = useMemo(
    () => [
      {
        header: 'Company Name',
        accessorKey: 'company_name',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Opportunity Name',
        accessorKey: 'opportunity_name',
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
        header: 'SKU',
        accessorKey: 'sku',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <NameColumn row={row} />
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
    if (selectedNewProduct.length > 0) {
      setSelectAllNewProduct([])
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

  const handleRowSelect = (checked: boolean, row: NewProduct) => {
    setSelectedNewProduct(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<NewProduct>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllNewProduct(originalRows)
    } else {
      setSelectAllNewProduct([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={newproductList}
      noData={!isLoading && newproductList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: newproductListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedNewProduct.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default NewProductListTable
