import React, { FC } from 'react'
import SideBar from '@/components/Layouts/Panels/Sidebar'
import Header from '@/components/Layouts/Panels/Header'

const AppLayout = <P extends object>(ComposedComponent: FC<P>): FC<P> => (props: P) => {
  const WrappedComponent = (
    <div className="app">
      <Header />
      <SideBar />
      <div className="app-main">
        <ComposedComponent {...props} />
      </div>

      <div className="app-footer">footer is here</div>
    </div>
  )
  return WrappedComponent
}

export default AppLayout
