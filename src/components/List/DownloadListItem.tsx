import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'

const useStyles = makeStyles((theme: Theme) => createStyles({ nested: { paddingLeft: theme.spacing(4) } }))

export interface DownloadListItemProps {
  path: string
  text: string
}

const DownloadListItem: FC<DownloadListItemProps> = ({ path, text }: DownloadListItemProps) => {
  const classes = useStyles({})

  return (
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        <PictureAsPdfIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <Link href={path} download>
          <IconButton edge="end" aria-label="download">
            <CloudDownloadIcon />
          </IconButton>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default DownloadListItem
