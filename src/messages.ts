import { Messages } from '@/utils/flat'

export interface MessagesLocale {
  [key: string]: Messages
}

const messages: MessagesLocale = {
  'en-US': {
    alerts: {
      gearAdded: 'Gear added',
    },
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
    docs: {
      specs: 'specifications',
      passports: 'passports',
    },
    errors: {
      general: 'Oops, some error happens',
      gearDuplicate: 'Gear with this \'z\' value already exist',
    },
    files: {
      almaty: 'Almaty 1957',
      almatyBushings: 'Almaty 1958 bushings',
      dubno: 'Dubno 1971 Ukrainian',
      dubnoUkr: 'Dubno 1972',
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
