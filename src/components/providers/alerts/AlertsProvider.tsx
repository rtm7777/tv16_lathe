import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import MuiAlert from '@material-ui/lab/Alert'

export type AlertType = 'error' | 'info' | 'success' | 'warning'

export interface AlertProps {
  type?: AlertType
  message: string
  onClose?: () => void
  onUndo?: () => unknown
  [key: string]: unknown
}

export interface AlertsContextProps {
  show: (props: AlertProps) => void
}

export interface AlertsProviderProps {
  children: ReactNode
}

export const AlertsContext = createContext<AlertsContextProps>({
  show: () => {},
})

export const useAlerts = (): AlertsContextProps => useContext(AlertsContext)

const AlertsProvider: FC = ({ children }: AlertsProviderProps) => {
  const [open, setOpen] = useState(false)
  const [alertProps, setAlertProps] = useState<AlertProps>({ type: 'success', message: '' })

  const show = useCallback((props) => {
    setOpen(true)
    setAlertProps(props)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
    alertProps.onClose?.()
  }, [alertProps])
  const handleUndo = useCallback(() => {
    setOpen(false)
    alertProps.onUndo()
  }, [alertProps])

  const value = useMemo(() => ({ show }), [])

  return (
    <AlertsContext.Provider value={value}>
      {children}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert
          action={alertProps.onUndo && (
            <Button onClick={handleUndo} color="inherit" size="small">
              UNDO
            </Button>
          )}
          elevation={6}
          onClose={handleClose}
          severity={alertProps.type}
          variant="filled"
        >
          {alertProps.message}
        </MuiAlert>
      </Snackbar>
    </AlertsContext.Provider>
  )
}

export default AlertsProvider
