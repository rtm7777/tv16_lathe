import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

export interface DownloadListItemProps {
  filePath: string
  route: string
  text: string
}

const DownloadListItem: FC<DownloadListItemProps> = ({ filePath, route, text }: DownloadListItemProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <ListItem
      disablePadding
      secondaryAction={(
        <Link href={filePath} download>
          <IconButton edge="end" aria-label="download">
            <CloudDownloadIcon />
          </IconButton>
        </Link>
      )}
      sx={{ paddingLeft: 4 }}
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
