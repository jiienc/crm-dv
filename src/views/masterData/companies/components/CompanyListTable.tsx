import { useMemo } from 'react'
import Avatar from '@/components/ui/Avatar'
// import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useCompanyList from '../hooks/useCompanyList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { Company } from '../types'
import type { TableQueries } from '@/@types/common'

// const statusColor: Record<string, string> = {
//     active: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
//     blocked: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
// }

const NameColumn = ({ row }: { row: Company }) => {
    return (
        <div className="flex items-center">
            <Avatar size={40} shape="circle" src={row.img} />
            <Link
                className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
                to={`/concepts/companys/company-details/${row.id}`}
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

const CompanyListTable = () => {
    const navigate = useNavigate()

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

    const handleEdit = (company: Company) => {
        navigate(`/concepts/companys/company-edit/${company.id}`)
    }

    const handleViewDetails = (company: Company) => {
        navigate(`/concepts/companys/company-details/${company.id}`)
    }

    const columns: ColumnDef<Company>[] = useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'name',
                cell: (props) => {
                    const row = props.row.original
                    return <NameColumn row={row} />
                },
            },
            {
                header: 'Email',
                accessorKey: 'email',
            },
            {
                header: 'phone',
                accessorKey: 'personalInfo.phone',
            },
            {
                header: 'pic',
                accessorKey: 'personalInfo.pic',
            },
            {
                header: 'assigned',
                accessorKey: 'personalInfo.assigned',
            },
            // {
            //     header: 'Status',
            //     accessorKey: 'status',
            //     cell: (props) => {
            //         const row = props.row.original
            //         return (
            //             <div className="flex items-center">
            //                 <Tag className={statusColor[row.status]}>
            //                     <span className="capitalize">{row.status}</span>
            //                 </Tag>
            //             </div>
            //         )
            //     },
            // },
            // {
            //     header: 'Spent',
            //     accessorKey: 'totalSpending',
            //     cell: (props) => {
            //         return <span>${props.row.original.totalSpending}</span>
            //     },
            // },
            {
                header: '',
                id: 'action',
                cell: (props) => (
                    <ActionColumn
                        onEdit={() => handleEdit(props.row.original)}
                        onViewDetail={() =>
                            handleViewDetails(props.row.original)
                        }
                    />
                ),
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                selectedCompany.some((selected) => selected.id === row.id)
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
