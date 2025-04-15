import { useMemo } from 'react'
import DataTable from '@/components/shared/DataTable'
import useCompanyList from '../hooks/useCompanyList'
import cloneDeep from 'lodash/cloneDeep'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Company } from '../types'
import type { TableQueries } from '@/@types/common'

const NameColumn = ({ row }: { row: Company }) => {
  return (
    <div className="flex items-center">
      <p className={`ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`} >
        {row.company_name}
      </p>
    </div>
  )
}

const PhoneColumn = ({ row }: { row: Company }) => {
  return (
    <div className="flex items-center">
      <p>{row.phone_no}</p>
    </div>
  )
}

const PicColumn = ({ row }: { row: Company }) => {
  return (
    <div className="flex items-center">
      <p>{row.pic}</p>
    </div>
  )
}

const EmailColumn = ({ row }: { row: Company }) => {
  return (
    <div className="flex items-center">
      <p>{row.email}</p>
    </div>
  )
}

const AssignedColumn = ({ row }: { row: Company }) => {
  return (
    <div className="flex items-center">
      <p>{row.assigned}</p>
    </div>
  )
}

const CompanyListTable = () => {
  const {
    companyList,
    companyListTotal,
    tableData,
    isLoading,
    setTableData,
    setSelectAllCompany,
    setSelectedCompany,
    selectedCompany,
  } = useCompanyList()

  const columns: ColumnDef<Company>[] = useMemo(
    () => [
      {
        header: 'Company',
        accessorKey: 'company_name',
        cell: (props) => {
          const row = props.row.original
          return <NameColumn row={row} />
        },
      },
      {
        header: 'Phone',
        accessorKey: 'phone_no',
        cell: (props) => {
          const row = props.row.original
          return <PhoneColumn row={row} />
        },
      },
      {
        header: 'PIC',
        accessorKey: 'pic',
        cell: (props) => {
          const row = props.row.original
          return <PicColumn row={row} />
        },
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: (props) => {
          const row = props.row.original
          return <EmailColumn row={row} />
        },
      },
      {
        header: 'Assigned',
        accessorKey: 'assigned',
        cell: (props) => {
          const row = props.row.original
          return <AssignedColumn row={row} />
        },
      },
    ],
    [],
  )

  const handleSetTableData = (data: TableQueries) => {
    setTableData(data)
    if (selectedCompany.length > 0) {
      setSelectAllCompany([])
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

  const handleRowSelect = (checked: boolean, row: Company) => {
    setSelectedCompany(checked, row)
  }

  const handleAllRowSelect = (checked: boolean, rows: Row<Company>[]) => {
    if (checked) {
      const originalRows = rows.map((row) => row.original)
      setSelectAllCompany(originalRows)
    } else {
      setSelectAllCompany([])
    }
  }

  return (
    <DataTable
      selectable
      columns={columns}
      data={companyList}
      noData={!isLoading && companyList.length === 0}
      skeletonAvatarColumns={[0]}
      skeletonAvatarProps={{ width: 28, height: 28 }}
      loading={isLoading}
      pagingData={{
        total: companyListTotal,
        pageIndex: tableData.pageIndex as number,
        pageSize: tableData.pageSize as number,
      }}
      checkboxChecked={(row) =>
        selectedCompany.some((selected) => selected.name === row.name)
      }
      onPaginationChange={handlePaginationChange}
      onSelectChange={handleSelectChange}
      onSort={handleSort}
      onCheckBoxChange={handleRowSelect}
      onIndeterminateCheckBoxChange={handleAllRowSelect}
    />
  )
}

export default CompanyListTable
