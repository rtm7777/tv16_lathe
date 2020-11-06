import { render } from 'react-dom'

import App from '@/components/App'

import store from '@/store'
import theme from '@/theme'

import { flattenMessages } from '@/utils/flat'
import messages from '@/messages'

const locale = (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language || 'en-US'

declare let module: any // eslint-disable-line

render(
  <App
    store={store}
    locale={messages[locale] ? locale : 'en-US'}
    theme={theme}
    messages={messages[locale] ? flattenMessages(messages[locale]) : flattenMessages(messages['en-US'])}
  />,
  document.querySelector('#root'),
)

if (module.hot) {
  module.hot.accept()
}
