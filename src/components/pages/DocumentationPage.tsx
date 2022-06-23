import { FC } from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import Grid from '@mui/material/Grid'

import Navigation from '@/components/documentation/Navigation'
import Passport from '@/components/documentation/Passport'
import Specs from '@/components/documentation/Specs'

const DcumentationPage: FC = () => {

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
          width: { md: '300px' },
          overflow: { md: 'auto' },
        }}
      >
        <Navigation />
      </Grid>
      <Grid
        item
        sx={{
          width: { md: 'calc(100% - 300px)' },
          height: { md: '100%' },
        }}
      >
        <Routes>
          <Route path="*" element={<Navigate replace to="specs" />} />
          <Route path="specs" element={<Specs />} />
          <Route path="passport/:passport" element={<Passport />} />
        </Routes>
      </Grid>
    </Grid>
  )
}

export default DcumentationPage
