import { useMemo } from 'react'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useProductList from '../hooks/useProductList'
import cloneDeep from 'lodash/cloneDeep'
import { Link, useNavigate } from 'react-router-dom'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Product } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: Product }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/concepts/products/product-details/${row.item_code}`}
      >
        {row.item_code}
      </Link>
    </div>
  )
}

const ItemGroupColumn = ({ row }: { row: Product }) => {
  return (
    <div className="flex items-center">
      <p>{row.item_group}</p>
    </div>
  )
}

const RmcColumn = ({ row }: { row: Product }) => {
  return (
    <div className="flex items-center">
      <p>{row.variant_based_on}</p>
    </div>
  )
}

// const UnitColumn = ({ row }: { row: Product }) => {
//   return (
//     <div className="flex items-center">
//       <p>{row.unit}</p>
//     </div>
//   )
// }

const ClassificationColumn = ({ row }: { row: Product }) => {
  return (
    <div className="flex items-center">
      <p>{row.asset_category}</p>
    </div>
  )
}

// const CompCodeColumn = ({ row }: { row: Product }) => {
//   return (
//     <div className="flex items-center">
//       <p>{row.company_code}</p>
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

const ProductListTable = () => {
  const navigate = useNavigate()

  const {
    productList,
    productListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllProduct,
    setSelectedProduct,
    selectedProduct,
  } = useProductList()

  const handleEdit = (product: Product) => {
    navigate(`/concepts/products/product-edit/${product.name}`)
  }

  const handleViewDetails = (product: Product) => {
    navigate(`/concepts/products/product-details/${product.name}`)
  }

  const columns: ColumnDef<Product>[] = useMemo(
    () => [
      {
        header: 'Code',
        accessorKey: 'item_code',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Product Group',
        accessorKey: 'item_group',
        cell: (props) => {
          const row = props.row.original
          return <ItemGroupColumn row={row} />
        },
      },
      {
        header: 'RMC',
        accessorKey: 'variant_based_on',
        cell: (props) => {
          const row = props.row.original
          return <RmcColumn row={row} />
        },
      },
      {
        header: 'Unit',
        accessorKey: 'unit',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <UnitColumn row={row} />
        // },
      },
      {
        header: 'Classification',
        accessorKey: 'asset_category',
        cell: (props) => {
          const row = props.row.original
          return <ClassificationColumn row={row} />
        },
      },
      {
        header: 'Company Code',
        accessorKey: 'company_code',
        // cell: (props) => {
        //   const row = props.row.original
        //   return <CompCodeColumn row={row} />
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
    if (selectedProduct.length > 0) {
      setSelectAllProduct([])
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

  const handleRowSelect = (checked: boolean, row: Product) => {
    setSelectedProduct(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Product>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllProduct(originalRows)
    } else {
      setSelectAllProduct([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={productList}
      noData={!isLoading && productList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: productListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedProduct.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default ProductListTable
