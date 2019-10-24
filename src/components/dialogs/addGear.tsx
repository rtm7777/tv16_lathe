import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme: Theme) => createStyles({ nested: { paddingLeft: theme.spacing(4) } }))

export interface CheckboxListItemProps {
  checked?: boolean
  onClick: () => void
  text: string
  dialogs: string
}

const CheckboxListItem: FC<CheckboxListItemProps> = ({ checked, onClick, text }) => {
  const classes = useStyles({})
  const WrappedComponent = (
    <ListItem button className={classes.nested} onClick={onClick}>
      <ListItemIcon>
        <Checkbox
          checked={checked}
          edge="start"
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )

  return WrappedComponent
}

export default CheckboxListItem
