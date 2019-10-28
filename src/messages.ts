import { Messages } from '@/utils/flat'

export interface MessagesLocale {
  [key: string]: Messages
}

const messages: MessagesLocale = {
  'en-US': {
    dialogs: {
      addGear: {
        header: 'Add Gear',
        content: 'Please enter your custom gear \'z\' value, it should be between {minZ} and {maxZ}.',
        cancel: 'cancel',
        add: 'add gear',
        useAsD: '- this gear can be used as "d"',
        zLabel: 'z = {minZ} ... {maxZ}',
      },
    },
    pages: {
      gearbox: 'Gearbox',
      documentation: 'Documentation',
    },
    gearSelector: {
      metric: 'Metric gears',
      imperial: 'Imperial gears',
      custom: 'Custom gears',
    },
    sidebar: {
      gearbox: 'Gearbox',
      documentation: 'Documentation',
      info: 'Info',
    },
  },
}

export default messages
