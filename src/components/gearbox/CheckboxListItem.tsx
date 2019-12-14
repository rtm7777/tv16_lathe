import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme: Theme) => createStyles({ nested: { paddingLeft: theme.spacing(4) } }))

export interface CheckboxListItemProps {
  checked?: boolean
  onClick: () => void
  text: string
}

const CheckboxListItem: FC<CheckboxListItemProps> = ({ checked, onClick, text }: CheckboxListItemProps) => {
  const classes = useStyles({})

  return (
    <ListItem button className={classes.nested} onClick={onClick}>
      <ListItemIcon>
        <Checkbox
          checked={checked}
          disableRipple
          edge="start"
          tabIndex={-1}
        />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default CheckboxListItem
