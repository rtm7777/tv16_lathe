import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { DialogsType } from '@/components/providers/dialogs/Dialogs'

export interface DialogsContextProps {
  opened: DialogsType
  open: (name: string, props?: Record<string, unknown>) => void
  close: (name: string) => void
}

export interface DialogsProviderProps {
  children: ReactNode
}

export const DialogsContext = createContext<DialogsContextProps>({
  opened: {},
  open: () => {},
  close: () => {},
})
export const useDialogs = (): DialogsContextProps => useContext(DialogsContext)

const DialogsProvider: FC = ({ children }: DialogsProviderProps) => {
  const [opened, setOpened] = useState<DialogsType>({})
  const open = useCallback((name, props) => setOpened((current) => ({ ...current, [name]: { ...props } })), [])
  const close = useCallback((name) => setOpened(({ [name]: _, ...rest }) => rest), [])
  const value = useMemo(() => ({ opened, open, close }), [opened])

  return (
    <DialogsContext.Provider value={value}>
      {children}
    </DialogsContext.Provider>
  )
}

export default DialogsProvider
