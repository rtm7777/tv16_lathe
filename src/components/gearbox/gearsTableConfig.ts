import { CellProps, Column } from 'react-table'
import { textCell, fixedNumberCell } from '@/components/Table/tableCells'


const config: Column[] = [
  {
    accessor: 'a',
    Header: ({ column, intl }: CellProps<any>) => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProps<any>) => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'b',
    Header: ({ column, intl }: CellProps<any>) => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProps<any>) => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'c',
    Header: ({ column, intl }: CellProps<any>) => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProps<any>) => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'd',
    Header: ({ column, intl }: CellProps<any>) => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProps<any>) => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'feed',
    Header: ({ column, intl }: CellProps<any>) => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProps<any>) => fixedNumberCell(row.original[column.id]),
  },
  {
    accessor: 'pmm',
    Header: ({ column, intl }: CellProps<any>) => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProps<any>) => fixedNumberCell(row.original[column.id]),
  },
  {
    accessor: 'tpi',
    Header: ({ column, intl }: CellProps<any>) => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProps<any>) => fixedNumberCell(row.original[column.id]),
  },
]

export default config
