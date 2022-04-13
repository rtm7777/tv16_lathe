import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui//material/styles'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
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
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <ListItem
      disablePadding
      className={classes.nested}
      secondaryAction={(
        <Link href={filePath} download>
          <IconButton edge="end" aria-label="download">
            <CloudDownloadIcon />
          </IconButton>
        </Link>
      )}
    >
      <ListItemButton selected={location.pathname === route} onClick={() => navigate(route)}>
        <ListItemIcon>
          <PictureAsPdfIcon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default DownloadListItem
