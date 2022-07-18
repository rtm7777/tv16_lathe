import { FC } from 'react'

import Grid from '@mui/material/Grid'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'

import { useDialogs } from '@/components/providers/dialogs/DialogsProvider'
import GearboxContent from '@/components/gearbox/GearboxContent'
import GearSelector from '@/components/gearbox/GearSelector'


const GearboxPage: FC = () => {
  const { open } = useDialogs()

  return (
    <Grid
      direction="row"
      container
      sx={{ height: { xs: 'auto', md: '100%' } }}
    >
      <Grid
        item
        sx={{
          display: { xs: 'none', md: 'flex' },
          height: { md: '100%' },
          width: { md: '200px' },
          overflow: { md: 'auto' },
        }}
      >
        <GearSelector />
      </Grid>
      <Grid
        item
        sx={{
          width: { md: 'calc(100% - 200px)' },
          height: { md: '100%' },
        }}
      >
        <GearboxContent />
      </Grid>
      <SpeedDial
        ariaLabel="Add Gear"
        icon={<SpeedDialIcon />}
        onClick={() => open('addGear')}
        open={false}
        sx={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
        }}
      />
    </Grid>
  )
}

export default GearboxPage
