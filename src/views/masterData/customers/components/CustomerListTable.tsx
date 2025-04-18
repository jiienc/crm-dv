import { useMemo } from 'react'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useCustomerList from '../hooks/useCustomerList'
import cloneDeep from 'lodash/cloneDeep'
import { Link, useNavigate } from 'react-router-dom'
import { TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Customer } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: Customer }) => {
  return (
    <div className="flex items-center">
      <Link
        className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
        to={`/master-data/customers/customer-details/${row.name}`}
      >
        {row.customer_name}
      </Link>
    </div>
  )
}

const AddressColumn = ({ row }: { row: Customer }) => {
  const formattedAddress = row.primary_address
    .replace(/<br\s*\/?>/gi, ', ')
    .replace(/\\n/g, '')
    .replace(/\s*,\s*,*/g, ', ')
    .replace(/^, |, $/g, '')
    .trim()
    .replace(/,+$/, '')
  return (
    <div className="flex items-center">
      <p className="truncate">{formattedAddress}</p>
    </div>
  )
}

const CustCodeColumn = ({ row }: { row: Customer }) => {
  const creation = row.creation
  let code = 'CUST-XXXX'

  if (creation) {
    const year = creation.slice(2, 4)
    const micro = creation.split('.')[1]?.slice(-2) || '00'
    code = `CUST-${year}${micro}`
  }

  return (
    <div className="flex items-center">
      <p>{code}</p>
    </div>
  )
}

const ActionColumn = ({
  onViewDetail,
}: {
  onViewDetail: () => void
}) => {
  return (
    <div className="flex items-center">
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

const CustomerListTable = () => {
  const navigate = useNavigate()

  const {
    customerList,
    customerListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllCustomer,
    setSelectedCustomer,
    selectedCustomer,
  } = useCustomerList()

  const handleViewDetails = (customer: Customer) => {
    navigate(`/master-data/customers/customer-details/${customer.name}`)
  }

  const columns: ColumnDef<Customer>[] = useMemo(
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
        header: 'Address Billing',
        accessorKey: 'primary_address',
        cell: (props) => {
          const row = props.row.original
          return <AddressColumn row={row} />
        },
      },
      {
        header: 'Customer Code',
        accessorKey: 'customer_type',
        cell: (props) => {
          const row = props.row.original
          return <CustCodeColumn row={row} />
        },
      },
      {
        header: 'Action',
        id: 'action',
        cell: (props) => (
          <ActionColumn
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
    if (selectedCustomer.length > 0) {
      setSelectAllCustomer([])
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

  const handleRowSelect = (checked: boolean, row: Customer) => {
    setSelectedCustomer(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Customer>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllCustomer(originalRows)
    } else {
      setSelectAllCustomer([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={customerList}
      noData={!isLoading && customerList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: customerListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedCustomer.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default CustomerListTable
