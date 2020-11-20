import { FC } from 'react'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { makeStyles } from '@material-ui/core/styles'

import usePagination from '@/hooks/usePagination'

const useStyles = makeStyles(() => ({
  container: {
    alignItems: 'center',
    bottom: '30px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
  },
  button: {
    minWidth: '40px',
    backgroundColor: '#BBBBBB70',
    padding: '5px 0px',
    fontWeight: 'bold',
  },
}))

export interface PaginationProps {
  page: number
  pagesCount: number
  setPage?: (arg0: number) => void
}

const Pagination: FC<PaginationProps> = ({ page, pagesCount, setPage }: PaginationProps) => {
  const classes = useStyles({})
  const pages = usePagination(page, pagesCount)

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        disabled={pages.length === 0 || page === 1}
        onClick={() => setPage(page - 1)}
        variant="outlined"
      >
        <KeyboardArrowLeftIcon />
      </Button>
      {pages.map((p) => {
        if (p > 0) {
          return (
            <Button
              className={classes.button}
              disabled={p === page}
              key={p}
              onClick={() => setPage(p)}
              variant="outlined"
            >
              {p}
            </Button>
          )
        }
        return <MoreHorizIcon key={p} />
      })}
      <Button
        className={classes.button}
        disabled={pages.length === 0 || page === pagesCount}
        onClick={() => setPage(page + 1)}
        variant="outlined"
      >
        <KeyboardArrowRightIcon />
      </Button>
    </div>
  )
}

export default Pagination
