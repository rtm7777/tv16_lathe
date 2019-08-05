import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppLayout from '@/components/Layouts/AppLayout'
import DocumentationPage from '@/components/pages/DocumentationPage'
import GearboxPage from '@/components/pages/GearboxPage'

const Router: FC = () => (
  <BrowserRouter>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={GearboxPage} />
        <Route path="/gearbox" component={GearboxPage} />
        <Route path="/documentation" component={DocumentationPage} />
      </Switch>
    </AppLayout>
  </BrowserRouter>
)

export default Router
