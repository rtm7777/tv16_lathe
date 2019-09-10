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
    gearSelector: {
      metric: 'Metric gears',
      imperial: 'Imperial gears',
      custom: 'Custom gears',
    },
  },
}

export default messages
