import { FC, useMemo } from 'react'
import { useTable } from 'react-table'
import { useIntl } from 'react-intl'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Table from '@/components/Table/Table'
import columns from '@/components/documentation/specsTableConfig'

import { SPECS } from '@/constants'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up('md')]: { height: '100%' },
  },
  controls: {
    [theme.breakpoints.up('sm')]: { height: '100px' },
  },
  table: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 100px)',
      overflow: 'auto',
    },
  },
}))

const Specs: FC = () => {
  const classes = useStyles({})
  const intl = useIntl()
  const data = useMemo(() => SPECS.map((s) => ({
    spec: intl.formatMessage({ id: `specsTable.${s}.spec` }),
    value: intl.formatMessage({ id: `specsTable.${s}.value` }),
  })), [])

  const table = useTable({
    columns,
    data,
    intl,
  })

  return (
    <Grid className={classes.container} container>
      <Table table={table} />
    </Grid>
  )
}

export default Specs
