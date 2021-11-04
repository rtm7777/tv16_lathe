import { FC, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Pagination from '@/components/Pagination/Pagination'

import { PASSPORTS } from '@/constants'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
      overflow: 'auto',
      justifyContent: 'center',
    },
  },
  controls: {
    [theme.breakpoints.up('sm')]: { height: '100px' },
  },
}))

const Passport: FC = () => {
  const classes = useStyles({})
  const { passport } = useParams()

  const [pagesCount, setPagesCount] = useState(0)
  const [page, setPage] = useState(1)

  const file = useMemo(() => `/passports/${PASSPORTS[passport]}`, [passport])

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => setPagesCount(numPages)

  return (
    <Grid className={classes.container} container>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={page} />
      </Document>
      <Pagination page={page} pagesCount={pagesCount} setPage={setPage} />
    </Grid>
  )
}

export default Passport
