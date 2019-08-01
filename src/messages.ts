import { Messages } from '@/utils/flat'

export interface MessagesLocale {
  [key: string]: Messages
}

const messages: MessagesLocale = {
  'en-US': {
    hello: 'Hello',
  },
}

export default messages
