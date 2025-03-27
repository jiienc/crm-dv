import { useMemo } from 'react'
import Table from '@/components/ui/Table'
import TableRowSkeleton from './loaders/TableRowSkeleton'
import Loading from './Loading'
import FileNotFound from '@/assets/svg/FileNotFound'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  Row,
  CellContext,
} from '@tanstack/react-table'
import type { TableProps } from '@/components/ui/Table'
import type { SkeletonProps } from '@/components/ui/Skeleton'
import type { ReactNode } from 'react'

type DataTableProps<T> = {
  columns: ColumnDef<T>[]
  customNoDataIcon?: ReactNode
  data?: unknown[]
  loading?: boolean
  noData?: boolean
  instanceId?: string
  pageSizes?: number[]
  selectable?: boolean
  skeletonAvatarColumns?: number[]
  skeletonAvatarProps?: SkeletonProps
  pagingData?: {
    total: number
    pageIndex: number
    pageSize: number
  }
} & TableProps

const { Tr, Th, Td, THead, TBody } = Table

function DataTable<T>(props: DataTableProps<T>) {
  const {
    skeletonAvatarColumns,
    columns: columnsProp = [],
    data = [],
    customNoDataIcon,
    loading,
    noData,
    selectable = false,
    skeletonAvatarProps,
    pagingData = {
      total: 0,
      pageIndex: 1,
      pageSize: 20,
    },
    ...rest
  } = props

  const { pageSize } = pagingData

  const finalColumns: ColumnDef<T>[] = useMemo(() => {
    const columns = columnsProp

    return columns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnsProp, selectable, loading])

  const table = useReactTable({
    data,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    columns: finalColumns as ColumnDef<unknown | object | any[], any>[],
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <Loading loading={Boolean(loading && data.length !== 0)} type="cover">
      <Table {...rest}>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                  </Th>
                )
              })}
            </Tr>
          ))}
        </THead>
        {loading && data.length === 0 ? (
          <TableRowSkeleton
            columns={(finalColumns as Array<T>).length}
            rows={pagingData.pageSize}
            avatarInColumns={skeletonAvatarColumns}
            avatarProps={skeletonAvatarProps}
          />
        ) : (
          <TBody>
            {noData ? (
              <Tr>
                <Td
                  className="hover:bg-transparent"
                  colSpan={finalColumns.length}
                >
                  <div className="flex flex-col items-center gap-4">
                    {customNoDataIcon ? (
                      customNoDataIcon
                    ) : (
                      <>
                        <FileNotFound />
                        <span className="font-semibold">No data found!</span>
                      </>
                    )}
                  </div>
                </Td>
              </Tr>
            ) : (
              table
                .getRowModel()
                .rows.slice(0, pageSize)
                .map((row) => {
                  return (
                    <Tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <Td
                            key={cell.id}
                            style={{
                              width: cell.column.getSize(),
                            }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </Td>
                        )
                      })}
                    </Tr>
                  )
                })
            )}
          </TBody>
        )}
      </Table>
    </Loading>
  )
}

export type { ColumnDef, Row, CellContext }
export default DataTable
