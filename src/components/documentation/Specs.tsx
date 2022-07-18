import { FC, useMemo } from 'react'
import { useTable } from 'react-table'
import { useIntl } from 'react-intl'
import Grid from '@mui/material/Grid'

import Table from '@/components/Table/Table'
import columns from '@/components/documentation/specsTableConfig'

import { SPECS } from '@/constants'

const Specs: FC = () => {
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
    <Grid container sx={{ height: { md: '100%' } }}>
      <Table table={table} />
    </Grid>
  )
}

export default Specs
