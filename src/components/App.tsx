import React, { FC } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Theme } from '@material-ui/core/styles'

import Providers from '@/components/Providers'
import Router from '@/components/Router'

import { FlattenMessages } from '@/utils/flat'

export interface AppProps {
  store: Store
  locale: string
  theme: Theme
  messages: FlattenMessages
}

const App: FC<AppProps> = ({
  store,
  locale,
  theme,
  messages,
}: AppProps) => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages}>
        <Providers>
          <Router />
        </Providers>
      </IntlProvider>
    </Provider>
  </ThemeProvider>
)

export default App
