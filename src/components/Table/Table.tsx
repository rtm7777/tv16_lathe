import { FC } from 'react'
import { TableInstance } from 'react-table'
import { createStyles, Theme, makeStyles } from '@mui/material/styles'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    tableLayout: 'fixed',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  gearCell: {
    [theme.breakpoints.up('xs')]: {
      width: 35,
      padding: '6px 1px 6px 1px;',
    },
    [theme.breakpoints.up('md')]: { width: 70 },
  },
}))

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
  const classes = useStyles({})

  return (
    <MuiTable
      {...getTableProps()}
      className={classes.table}
      stickyHeader
      size="small"
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
                  className={classes.headerCell}
                  align="center"
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
                    className={classes[cell.column.className]}
                    align="center"
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
