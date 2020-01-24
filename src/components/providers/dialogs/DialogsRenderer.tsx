import React, { FC, useMemo } from 'react'

import { useDialogs } from '@/components/providers/dialogs/DialogsProvider'
import DIALOGS from '@/components/providers/dialogs/Dialogs'

const DialogsRenderer: FC = () => {
  const dialogs = useDialogs()
  const refs = useMemo(() => Object.keys(DIALOGS), [])

  return (
    <>
      { refs.map((name) => {
        const props = dialogs.opened[name]
        const Comp = DIALOGS[name]
        // eslint-disable-next-line react/jsx-props-no-spreading
        return props ? <Comp key={name} {...props} dialogs={dialogs} /> : null
      })}
    </>
  )
}

export default DialogsRenderer
