import React, { FC } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DocumentationPage from '@/components/Pages/DocumentationPage'
import GearboxPage from '@/components/Pages/GearboxPage'

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={GearboxPage} />
      <Route path="/gearbox" component={GearboxPage} />
      <Route path="/documentation" component={DocumentationPage} />
    </Switch>
  </BrowserRouter>
)

export default Router
