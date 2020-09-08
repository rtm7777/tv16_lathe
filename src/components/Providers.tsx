import React, { FC, ReactNode } from 'react'

import DialogsProvider from '@/components/providers/dialogs/DialogsProvider'

export interface ProvidersProps {
  children: ReactNode
}

const Providers: FC = ({ children }: ProvidersProps) => (
  <DialogsProvider>
    {children}
  </DialogsProvider>
)

export default Providers
