import { Messages } from '@/utils/flat'

export interface MessagesLocale {
  [key: string]: Messages
}

const messages: MessagesLocale = {
  'en-US': {
    pages: {
      gearbox: 'Gearbox',
      documentation: 'Documentation',
    },
  },
}

export default messages
