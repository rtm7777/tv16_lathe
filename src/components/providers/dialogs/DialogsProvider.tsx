import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { DialogsProps } from '@/components/providers/dialogs/Dialogs'

interface DialogsType {
  [key: string]: DialogsProps
}


export interface DialogsContextProps {
  opened: DialogsType
  open: (name: string, props?: DialogsProps) => void
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

const DialogsProvider: FC<DialogsProviderProps> = ({ children }: DialogsProviderProps) => {
  const [opened, setOpened] = useState<DialogsType>({})
  const open = useCallback(
    (name: string, props: DialogsProps) => setOpened((current) => ({ ...current, [name]: { ...props } })),
    [])
  const close = useCallback((name: string) => setOpened(({ [name]: _, ...rest }) => rest), [])
  const value = useMemo(() => ({ opened, open, close }), [opened])

  return (
    <DialogsContext.Provider value={value}>
      {children}
    </DialogsContext.Provider>
  )
}

export default DialogsProvider
