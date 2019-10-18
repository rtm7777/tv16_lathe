import React, { useState, FC, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppLayout from '@/components/Layouts/AppLayout'
import DocumentationPage from '@/components/pages/DocumentationPage'
import GearboxPage from '@/components/pages/GearboxPage'

const loadApp = (): Promise<void> => Promise.resolve() // todo add reducer

const Router: FC = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        await loadApp()
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    load()
  }, [])

  if (isLoading) return <div>Loading...</div>
  return (
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
}

export default Router
