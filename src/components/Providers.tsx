import { FC, ReactNode } from 'react'

import DialogsProvider from '@/components/providers/dialogs/DialogsProvider'
import AlertsProvider from '@/components/providers/alerts/AlertsProvider'

export interface ProvidersProps {
  children: ReactNode
}

const Providers: FC = ({ children }: ProvidersProps) => (
  <AlertsProvider>
    <DialogsProvider>
      {children}
    </DialogsProvider>
  </AlertsProvider>
)

export default Providers
