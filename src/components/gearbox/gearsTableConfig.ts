import { CellProps, Column } from 'react-table'
import { textCell, fixedNumberCell } from '@/components/Table/tableCells'

type CellProp = CellProps<Record<string, number>>

const config: Column[] = [
  {
    accessor: 'a',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProp): void => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'b',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProp): void => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'c',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProp): void => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'd',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProp): void => textCell(row.original[column.id]),
    className: 'gearCell',
  },
  {
    accessor: 'feed',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProp): void => fixedNumberCell(row.original[column.id]),
  },
  {
    accessor: 'pmm',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProp): void => fixedNumberCell(row.original[column.id]),
  },
  {
    accessor: 'tpi',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({ id: `table.${column.id}` })),
    Cell: ({ row, column }: CellProp): void => fixedNumberCell(row.original[column.id]),
  },
]

export default config
