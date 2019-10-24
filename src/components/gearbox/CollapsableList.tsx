import React, { useState, FC } from 'react'

import List from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

export interface CollapsableListProps {
  text: string
}

const CollapsableList: FC<CollapsableListProps> = ({ children, text }) => {
  const [open, setOpen] = useState(true)

  const WrappedComponent = (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  )
  return WrappedComponent
}

export default CollapsableList