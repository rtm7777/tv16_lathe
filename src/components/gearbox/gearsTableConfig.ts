import { CellProps, Column } from 'react-table'
import { headerCell, gearCell, fixedValueCell } from '@/components/gearbox/Table/tableCells'


const config: Column[] = [
  {
    accessor: 'a',
    Header: ({ column, intl }: CellProps<any>) => headerCell(column, intl),
    Cell: ({ row, column }: CellProps<any>) => gearCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'b',
    Header: ({ column, intl }: CellProps<any>) => headerCell(column, intl),
    Cell: ({ row, column }: CellProps<any>) => gearCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'c',
    Header: ({ column, intl }: CellProps<any>) => headerCell(column, intl),
    Cell: ({ row, column }: CellProps<any>) => gearCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'd',
    Header: ({ column, intl }: CellProps<any>) => headerCell(column, intl),
    Cell: ({ row, column }: CellProps<any>) => gearCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'feed',
    Header: ({ column, intl }: CellProps<any>) => headerCell(column, intl),
    Cell: ({ row, column }: CellProps<any>) => fixedValueCell(row.original[column.id]),
  },
  {
    accessor: 'pmm',
    Header: ({ column, intl }: CellProps<any>) => headerCell(column, intl),
    Cell: ({ row, column }: CellProps<any>) => fixedValueCell(row.original[column.id]),
  },
  {
    accessor: 'tpi',
    Header: ({ column, intl }: CellProps<any>) => headerCell(column, intl),
    Cell: ({ row, column }: CellProps<any>) => fixedValueCell(row.original[column.id]),
  },
]

export default config
