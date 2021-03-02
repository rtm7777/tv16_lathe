import { FC } from 'react'

import AddGearDialog, { AddGearDialogProps } from '@/components/dialogs/addGear'
import CalculatorDialog, { CalculatorDialogProps } from '@/components/dialogs/calculator'
import GearSelectorDialog, { GearSelectorDialogProps } from '@/components/dialogs/gearSelector'
import InfoDialog, { InfoDialogProps } from '@/components/dialogs/info'

export interface DialogsType {
  [key: string]: FC<AddGearDialogProps | CalculatorDialogProps | GearSelectorDialogProps | InfoDialogProps>
}

const DIALOGS: DialogsType = {
  addGear: AddGearDialog,
  calculator: CalculatorDialog,
  gearSelector: GearSelectorDialog,
  info: InfoDialog,
}

export default DIALOGS
