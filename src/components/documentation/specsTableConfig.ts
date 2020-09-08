import { CellProps, Column } from 'react-table'
import { textCell } from '@/components/Table/tableCells'

const config: Column[] = [
  {
    accessor: 'param',
    Header: ({ column, intl }: CellProps<any>) => textCell('param'),
    Cell: ({ row, column }: CellProps<any>) => textCell(row.original[column.id]),
  },
  {
    accessor: 'value',
    Header: ({ column, intl }: CellProps<any>) => textCell('value'),
    Cell: ({ row, column }: CellProps<any>) => textCell(row.original[column.id]),
  },
]

export default config
