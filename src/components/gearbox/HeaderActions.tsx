import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import FunctionsIcon from '@mui/icons-material/Functions'
import TuneIcon from '@mui/icons-material/Tune'

import { useDialogs } from '@/components/providers/dialogs/DialogsProvider'

const HeaderActions: FC = () => {
  const dialogs = useDialogs()

  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'initial' } }}>
        <Button color="inherit" startIcon={<FunctionsIcon />} onClick={() => dialogs.open('calculator')}>
          <FormattedMessage id="header.calculator" />
        </Button>
      </Box>
      <Box sx={{ display: { md: 'none' } }}>
        <IconButton aria-label="open calculator" color="inherit" onClick={() => dialogs.open('calculator')}>
          <FunctionsIcon />
        </IconButton>
        <IconButton aria-label="change gears" color="inherit" onClick={() => dialogs.open('gearSelector')}>
          <TuneIcon />
        </IconButton>
      </Box>
    </>
  )
}

export default HeaderActions
