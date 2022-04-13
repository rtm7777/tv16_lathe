import { FC } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@mui/material/styles'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

const useStyles = makeStyles((theme: Theme) => createStyles({ nested: { paddingLeft: theme.spacing(4) } }))

export interface DownloadListItemProps {
  filePath: string
  route: string
  text: string
}

const DownloadListItem: FC<DownloadListItemProps> = ({ filePath, route, text }: DownloadListItemProps) => {
  const classes = useStyles({})

  return (
    <ListItem
      button
      className={classes.nested}
      component={({ className, ...props }) => (
        <NavLink to={route} className={({ isActive }) => clsx(className, isActive && 'Mui-selected')} {...props}/>
      )}
    >
      <ListItemIcon>
        <PictureAsPdfIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <Link href={filePath} download>
          <IconButton edge="end" aria-label="download">
            <CloudDownloadIcon />
          </IconButton>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default DownloadListItem
