import React, { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      tableLayout: 'fixed',
    },
    gearCell: {
      [theme.breakpoints.up('xs')]: {
        width: 35,
        padding: '6px 1px 6px 1px;',
      },
      [theme.breakpoints.up('md')]: { width: 70 },
    },
  }),
)

interface TableRow {
  a: number
  b: number
  c: number
  d: number
  feed: number
  pmm: number
  tpi: number
}

export interface GearsTableProps {
  data: TableRow[]
}

const GearsTable: FC<GearsTableProps> = ({ data }) => {
  const classes = useStyles({})

  const WrappedComponent = (
    <Table className={classes.table} stickyHeader size="small">
      <TableHead>
        <TableRow>
          <TableCell className={classes.gearCell} align="center">
            a
          </TableCell>
          <TableCell className={classes.gearCell} align="center">
            b
          </TableCell>
          <TableCell className={classes.gearCell} align="center">
            c
          </TableCell>
          <TableCell className={classes.gearCell} align="center">
            d
          </TableCell>
          <TableCell align="center">feed</TableCell>
          <TableCell align="center">pitch / mm</TableCell>
          <TableCell align="center">tpi</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.a}>
            <TableCell className={classes.gearCell} align="center">
              {row.a}
            </TableCell>
            <TableCell className={classes.gearCell} align="center">
              {row.b}
            </TableCell>
            <TableCell className={classes.gearCell} align="center">
              {row.c}
            </TableCell>
            <TableCell className={classes.gearCell} align="center">
              {row.d}
            </TableCell>
            <TableCell align="center">{row.feed.toFixed(4)}</TableCell>
            <TableCell align="center">{row.pmm.toFixed(4)}</TableCell>
            <TableCell align="center">{row.tpi.toFixed(4)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
  return WrappedComponent
}

export default GearsTable
