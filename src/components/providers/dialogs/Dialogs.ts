import { FC } from 'react'

import AddGearDialog from '@/components/dialogs/addGear'
import CalculatorDialog from '@/components/dialogs/calculator'
import GearSelectorDialog from '@/components/dialogs/gearSelector'

export interface DialogsType {
  [key: string]: FC<{ dialogs: Record<string, unknown> }>
}

const DIALOGS: DialogsType = {
  addGear: AddGearDialog,
  calculator: CalculatorDialog,
  gearSelector: GearSelectorDialog,
}

export default DIALOGS
