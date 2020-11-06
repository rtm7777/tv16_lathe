import { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme: Theme) => createStyles({ nested: { paddingLeft: theme.spacing(4) } }))

export interface CheckboxListItemProps {
  checked?: boolean
  onClick: () => void
  onDelete?: () => void
  text: string
}

const CheckboxListItem: FC<CheckboxListItemProps> = ({
  checked,
  onClick,
  onDelete,
  text,
}: CheckboxListItemProps) => {
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
      { onDelete && (
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}

export default CheckboxListItem
