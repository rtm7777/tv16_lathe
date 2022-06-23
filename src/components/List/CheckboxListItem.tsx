import { FC } from 'react'

import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'


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
  return (
    <ListItem button onClick={onClick} sx={{ paddingLeft: 4 }}>
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
