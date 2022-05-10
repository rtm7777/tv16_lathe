import { FC, ReactNode } from 'react'

import DialogsProvider from '@/components/providers/dialogs/DialogsProvider'
import AlertsProvider from '@/components/providers/alerts/AlertsProvider'

export type ProvidersProps = {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }: ProvidersProps) => (
  <AlertsProvider>
    <DialogsProvider>
      {children}
    </DialogsProvider>
  </AlertsProvider>
)

export default Providers
