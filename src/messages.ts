import { Messages } from '@/utils/flat'

export interface MessagesLocale {
  [key: string]: Messages
}

const messages: MessagesLocale = {
  'en-US': {
    dialogs: {
      addGear: {
        add: 'add gear',
        cancel: 'cancel',
        content: 'Please enter your custom gear \'z\' value, it should be between {minZ} and {maxZ}.',
        header: 'Add Gear',
        useAsD: '- this gear can be used as "d"',
        zLabel: 'z = {minZ} ... {maxZ}',
      },
    },
    filters: {
      approx: 'approx',
      system: {
        pmm: 'pitch',
        tpi: 'tpi',
      },
      unique: 'unique',
    },
    pages: {
      documentation: 'Documentation',
      gearbox: 'Gearbox',
    },
    gearSelector: {
      custom: 'Custom gears',
      imperial: 'Imperial gears',
      metric: 'Metric gears',
      noGears: 'No custom gears'
    },
    sidebar: {
      documentation: 'Documentation',
      gearbox: 'Gearbox',
      info: 'Info',
    },
  },
}

export default messages
