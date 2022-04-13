import { useState, FC, ReactNode } from 'react'

import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export interface CollapsableListProps {
  children: ReactNode
  text: string
}

const CollapsableList: FC<CollapsableListProps> = ({ children, text }: CollapsableListProps) => {
  const [open, setOpen] = useState(true)

  return (
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
}

export default CollapsableList
