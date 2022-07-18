import { FC } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import usePagination from '@/hooks/usePagination'

const buttonSX = {
  minWidth: '40px',
  backgroundColor: '#BBBBBB70',
  padding: '5px 0px',
  fontWeight: 'bold',
}

export interface PaginationProps {
  page: number
  pagesCount: number
  setPage?: (arg0: number) => void
}

const Pagination: FC<PaginationProps> = ({ page, pagesCount, setPage }: PaginationProps) => {
  const pages = usePagination(page, pagesCount)

  return (
    <Box sx={{
      alignItems: 'center',
      bottom: '30px',
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      position: 'fixed',
      width: '100%',
    }}>
      <Button
        disabled={pages.length === 0 || page === 1}
        onClick={() => setPage(page - 1)}
        variant="outlined"
        sx={buttonSX}
      >
        <KeyboardArrowLeftIcon />
      </Button>
      {pages.map((p) => {
        if (p > 0) {
          return (
            <Button
              disabled={p === page}
              key={p}
              onClick={() => setPage(p)}
              variant="outlined"
              sx={buttonSX}
            >
              {p}
            </Button>
          )
        }
        return <MoreHorizIcon key={p} />
      })}
      <Button
        disabled={pages.length === 0 || page === pagesCount}
        onClick={() => setPage(page + 1)}
        variant="outlined"
        sx={buttonSX}
      >
        <KeyboardArrowRightIcon />
      </Button>
    </Box>
  )
}

export default Pagination
