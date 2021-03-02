import { useState, FC, useEffect } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'

import { useAlerts } from '@/components/providers/alerts/AlertsProvider'
import AppLayout from '@/components/Layouts/AppLayout'
import DialogsRenderer from '@/components/providers/dialogs/DialogsRenderer'
import DocumentationPage from '@/components/pages/DocumentationPage'
import GearboxPage from '@/components/pages/GearboxPage'

import { loadGears, loadFilters } from '@/redux/gearbox'
import { ROOT, GEARBOX, DOCUMENTATION } from '@/routes'

const Router: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const { show } = useAlerts()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        await dispatch(loadGears())
        await dispatch(loadFilters())
        setLoading(false)
      } catch (err) {
        show({ type: 'error', message: formatMessage({ id: err.message }) })
      }
    }
    load()
  }, [])

  if (isLoading) return <div>Loading...</div>
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Redirect exact from={ROOT} to={GEARBOX} />
          <Route path={GEARBOX} component={GearboxPage} />
          <Route path={DOCUMENTATION} component={DocumentationPage} />
          <Redirect from="*" to={GEARBOX} />
        </Switch>
      </AppLayout>
      <DialogsRenderer />
    </BrowserRouter>
  )
}

export default Router
