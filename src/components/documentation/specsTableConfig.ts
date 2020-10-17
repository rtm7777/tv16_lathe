import { CellProps, Column } from 'react-table'
import { textCell } from '@/components/Table/tableCells'

type CellProp = CellProps<Record<string, number>>

const config: Column[] = [
  {
    accessor: 'spec',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({
      id: `specs.tableHeaders.${column.id}`,
    })),
    Cell: ({ row, column }: CellProp): void => textCell(row.original[column.id]),
  },
  {
    accessor: 'value',
    Header: ({ column, intl }: CellProp): void => textCell(intl.formatMessage({
      id: `specs.tableHeaders.${column.id}`,
    })),
    Cell: ({ row, column }: CellProp): void => textCell(row.original[column.id]),
  },
]

export default config
