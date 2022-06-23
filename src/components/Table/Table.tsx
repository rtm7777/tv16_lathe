import { FC } from 'react'
import { TableInstance } from 'react-table'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const cellStyles = {
  table: {},
  gearCell: {
    width: { xs: 35, md: 70 },
    padding: { xs: '6px 1px 6px 1px;' },
  },
}

interface TableProps {
  table: TableInstance
}

/* eslint-disable react/jsx-props-no-spreading */
const Table: FC<TableProps> = ({
  table: {
    getTableProps,
    headers,
    prepareRow,
    rows,
  },
}: TableProps) => {
  return (
    <MuiTable
      {...getTableProps()}
      stickyHeader
      size="small"
      sx={{ tableLayout: 'fixed' }}
    >
      <TableHead>
        <TableRow>
          {
            headers.map((column) => {
              const { key, ...props } = column.getHeaderProps()
              return (
                <TableCell
                  key={key}
                  {...props}
                  align="center"
                  sx={{ fontWeight: 'bold' }}
                >
                  {column.render('Header')}
                </TableCell>
              )
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          prepareRow(row)
          const { key, ...props } = row.getRowProps()
          return (
            <TableRow key={key} {...props}>
              {row.cells.map((cell) => {
                const { key: cellKey, ...cellProps } = cell.getCellProps()
                return (
                  <TableCell
                    key={cellKey}
                    {...cellProps}
                    align="center"
                    sx={cellStyles[cell.column.className]}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MuiTable>
  )
}

export default Table
