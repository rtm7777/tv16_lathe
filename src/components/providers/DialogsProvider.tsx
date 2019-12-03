import React, {
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import AddGearDialog from '@/components/dialogs/addGear'
import GearSelectorDialog from '@/components/dialogs/gearSelector'

interface DialogsType {
  [key: string]: FC<{[key: string]: {}}>
}
export interface DialogsContextProps {
  opened: DialogsType
  open: (name: string, props?: {}) => void
  close: (name: string) => void
}

export const DialogsContext = React.createContext<DialogsContextProps>({
  opened: {},
  open: () => {},
  close: () => {},
})
export const useDialogs = (): DialogsContextProps => useContext(DialogsContext)

const DIALOGS: DialogsType = {
  addGear: AddGearDialog,
  gearSelector: GearSelectorDialog,
}
const dialogs = Object.keys(DIALOGS)

/* eslint-disable react/jsx-props-no-spreading */
const DialogsProvider: FC = ({ children }) => {
  const [opened, setOpened] = useState<DialogsType>({})
  const open = useCallback((name, props) => setOpened({ ...opened, [name]: { ...props } }), [opened])
  const close = useCallback((name: string) => {
    const { [name]: _, ...rest } = opened
    setOpened(rest)
  }, [opened])
  const value = useMemo(() => ({ opened, open, close }), [opened, open, close])

  const WrappedComponent = (
    <DialogsContext.Provider value={value}>
      {children}
      {dialogs.map(name => {
        const props = opened[name]
        const Comp = DIALOGS[name]
        return props ? <Comp key={name} {...props} dialogs={value} /> : null
      })}
    </DialogsContext.Provider>
  )

  return WrappedComponent
}

export default DialogsProvider
