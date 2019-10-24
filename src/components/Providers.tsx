
import React, { FC } from 'react'

import DialogsProvider from '@/components/providers/DialogsProvider'

const Providers: FC = ({ children }) => {
  const WrappedComponent = (
    <DialogsProvider>
      {children}
    </DialogsProvider>
  )

  return WrappedComponent
}

export default Providers
