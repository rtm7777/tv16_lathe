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
      calculator: {
        header: 'Thread Calculator',
        a: 'a gear',
        b: 'b gear',
        c: 'c gear',
        d: 'd gear',
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
    table: {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      feed: 'feed',
      pmm: 'pitch',
      tpi: 'tpi',
    },
    gearSelector: {
      custom: 'Custom gears',
      gearConfiguration: 'Gears Configuration',
      imperial: 'Imperial gears',
      metric: 'Metric gears',
      noGears: 'No custom gears',
    },
    header: {
      calculator: 'Calculator',
    },
    pages: {
      documentation: 'Documentation',
      gearbox: 'Gearbox',
    },
    sidebar: {
      documentation: 'Documentation',
      gearbox: 'Gearbox',
      info: 'Info',
    },
  },
}

export default messages
