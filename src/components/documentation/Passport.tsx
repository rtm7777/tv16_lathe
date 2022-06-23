import { FC, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Grid from '@mui/material/Grid'

import Pagination from '@/components/Pagination/Pagination'

import { PASSPORTS } from '@/constants'

const Passport: FC = () => {
  const { passport } = useParams()

  const [pagesCount, setPagesCount] = useState(0)
  const [page, setPage] = useState(1)

  const file = useMemo(() => `/passports/${PASSPORTS[passport]}`, [passport])

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => setPagesCount(numPages)

  return (
    <Grid container sx={{
      height: { md: '100%' },
      overflow: { md: 'auto' },
      justifyContent: { md: 'center' },
    }}
    >
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
