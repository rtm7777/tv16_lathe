import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { addLocaleData } from 'react-intl'
import * as en from 'react-intl/locale-data/en'

import App from '@/components/App'

import store from '@/store'
import theme from '@/theme'

import { flattenMessages } from '@/utils/flat'
import messages from '@/messages'

addLocaleData(en)
const locale = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language || 'en-US'

ReactDOM.render(
  <App
    store={store}
    locale={messages[locale] ? locale : 'en-US'}
    theme={theme}
    messages={messages[locale] ? flattenMessages(messages[locale]) : flattenMessages(messages['en-US'])}
  />,
  document.querySelector('#root'),
)
