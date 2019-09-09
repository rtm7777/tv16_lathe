import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme: Theme) => createStyles({ nested: { paddingLeft: theme.spacing(4) } }))

const CheckboxList: FC = () => {
  const classes = useStyles({})
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value: number): (() => void) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const [open, setOpen] = React.useState(true)

  return (
    <List subheader={<ListSubheader>Gears</ListSubheader>}>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={handleToggle(0)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': 'checkbox-list-label-1' }}
              />
            </ListItemIcon>
            <ListItemText primary="helllo" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  )
}

export default CheckboxList
