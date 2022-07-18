import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { useIntl } from 'react-intl'
import Grid from '@mui/material/Grid'

import GearboxFilter from '@/components/gearbox/GearboxFilter'
import Table from '@/components/Table/Table'

import { AppState } from '@/redux/types'
import columns from '@/components/gearbox/gearsTableConfig'


const GearboxContent: FC = () => {
  const intl = useIntl()
  const { configs } = useSelector(({ gearbox }: AppState) => gearbox)

  const table = useTable({
    columns,
    data: configs,
    intl,
  })

  return (
    <Grid container sx={{ height: { md: '100%' } }}>
      <Grid item xs={12} sx={{ height: { sm: '100px' } }}>
        <GearboxFilter />
      </Grid>
      <Grid
        item xs={12}
        sx={{
          height: { sm: 'calc(100% - 100px)' },
          overflow: { sm: 'auto' },
        }}
      >
        <Table table={table} />
      </Grid>
    </Grid>
  )
}

export default GearboxContent
