import { useMemo } from 'react'
import DataTableAccess from '@/components/shared/DataTableAccess'
import type { ColumnDef } from '@/components/shared/DataTable'
import type { Access } from '../types'
import Checkbox from '@/components/ui/Checkbox'
import type { ChangeEvent } from 'react'

const AccessListTable = () => {
  const onCheck = (value: boolean, e: ChangeEvent<HTMLInputElement>) => {
    console.log(value, e)
  }

  const columns: ColumnDef<Access>[] = useMemo(
    () => [
      { header: 'Menu', accessorKey: 'menu' },
      {
        header: 'Create',
        accessorKey: 'create',
        cell: ({ row }) =>
          [
            'Dashboard',
            'Customers',
            'Products',
            'Opportunities',
            'Report',
            'Audit Trail',
          ].includes(row.original.menu) ? null : (
            <Checkbox defaultChecked={row.original.create} onChange={onCheck} />
          ),
      },
      {
        header: 'Read',
        accessorKey: 'read',
        cell: ({ row }) => (
          <Checkbox defaultChecked={row.original.read} onChange={onCheck} />
        ),
      },
      {
        header: 'Update',
        accessorKey: 'update',
        cell: ({ row }) =>
          ['Dashboard', 'Report', 'Attendance', 'Audit Trail'].includes(
            row.original.menu,
          ) ? null : (
            <Checkbox defaultChecked={row.original.update} onChange={onCheck} />
          ),
      },
      {
        header: 'Delete',
        accessorKey: 'delete',
        cell: ({ row }) =>
          [
            'Dashboard',
            'Products',
            'Report',
            'Attendance',
            'Audit Trail',
          ].includes(row.original.menu) ? null : (
            <Checkbox defaultChecked={row.original.delete} onChange={onCheck} />
          ),
      },
      {
        header: 'Print',
        accessorKey: 'print',
        cell: ({ row }) =>
          ['Dashboard', 'Products', 'Users', 'Access', 'Audit Trail'].includes(
            row.original.menu,
          ) ? null : (
            <Checkbox defaultChecked={row.original.print} onChange={onCheck} />
          ),
      },
      {
        header: 'Approve',
        accessorKey: 'approve',
        cell: ({ row }) =>
          [
            'Dashboard',
            'Companies',
            'Customers',
            'Products',
            'Tickets',
            'Report',
            'Attendance',
            'Users',
            'Access',
            'Audit Trail',
            'KPI',
            'Hierarchy',
          ].includes(row.original.menu) ? null : (
            <Checkbox defaultChecked={row.original.print} onChange={onCheck} />
          ),
      },
    ],
    [],
  )

  const usersList: Access[] = [
    {
      menu: 'Dashboard',
      create: false,
      read: true,
      update: false,
      delete: false,
      print: false,
      approve: false,
    },
    {
      menu: 'Companies',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: false,
    },
    {
      menu: 'Customers',
      create: false,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: false,
    },
    {
      menu: 'Products',
      create: false,
      read: true,
      update: true,
      delete: false,
      print: false,
      approve: false,
    },
    {
      menu: 'Leads',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'Events',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'Opportunities',
      create: false,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'Tickets',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: false,
    },
    {
      menu: 'Sample',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'Product Improvement',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'New Product',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'Return',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'Quotation',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: true,
    },
    {
      menu: 'Report',
      create: false,
      read: true,
      update: false,
      delete: false,
      print: true,
      approve: false,
    },
    {
      menu: 'Attendance',
      create: true,
      read: true,
      update: false,
      delete: false,
      print: true,
      approve: false,
    },
    {
      menu: 'Users',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: false,
      approve: false,
    },
    {
      menu: 'Access',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: false,
      approve: false,
    },
    {
      menu: 'Audit Trail',
      create: false,
      read: true,
      update: false,
      delete: false,
      print: false,
      approve: false,
    },
    {
      menu: 'KPI',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: false,
    },
    {
      menu: 'Hierarchy',
      create: true,
      read: true,
      update: true,
      delete: true,
      print: true,
      approve: false,
    },
  ]

  return <DataTableAccess selectable columns={columns} data={usersList} />
}

export default AccessListTable
