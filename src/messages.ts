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
      'documentation/specs': 'Specifications',
      gearbox: 'Gearbox',
    },
    sidebar: {
      documentation: 'Documentation',
      gearbox: 'Gearbox',
      info: 'Info',
    },
    specs: {
      model: {
        spec: 'Model',
        value: 'TV-16',
      },
      centreHeight: {
        spec: 'Centre height',
        value: '85 mm',
      },
      centreDistance: {
        spec: 'Centre distance',
        value: '250 mm',
      },
      spindleBore: {
        spec: 'Spindle bore',
        value: '18 mm',
      },
      swingOverBed: {
        spec: 'Swing over bed',
        value: '160 mm',
      },
      swingOverCarriage: {
        spec: 'Swing over carriage',
        value: '90 mm',
      },
      weight: {
        spec: 'Weight',
        value: '150 kg',
      },
      feedRates: {
        spec: 'Feed rates',
        value: '0.01 ... 0.15 mm/rev',
      },
      speedRange: {
        spec: 'Speed range',
        value: '160 ... 1600 rpm',
      },
      metricThreadPitches: {
        spec: 'Metric thread pitches',
        value: '0.2 ... 3',
      },
      possibleThreads: {
        spec: 'Possible threads',
        value: 'Metric',
      },
      spindleCone: {
        spec: 'Spindle cone',
        value: 'MT3',
      },
      tailStockCone: {
        spec: 'Tail stock cone',
        value: 'MT1',
      },
      mainDrive: {
        spec: 'Main drive',
        value: '',
      },
      spindleBrake: {
        spec: 'Spindle brake',
        value: 'No',
      },
      coolantSystem: {
        spec: 'Coolant system',
        value: 'No',
      },
    },
  },
}

export default messages
