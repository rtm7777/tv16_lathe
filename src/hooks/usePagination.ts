import { useMemo } from 'react'

const getRange = (start: number, end: number): number[] => Array(end - start + 1)
  .fill(undefined)
  .map((v, i) => i + start)

const pagination = (currentPage: number, pageCount: number): number[] => {
  let delta: number
  if (pageCount <= 7) {
    // delta === 7: [1 2 3 4 5 6 7]
    delta = 7
  } else {
    // delta === 2: [1 ... 4 5 6 ... 10]
    // delta === 4: [1 2 3 4 5 ... 10]
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4
  }

  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  }

  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1
    range.end += 1
  }

  let pages = currentPage > delta
    ? getRange(Math.min(range.start, pageCount - delta), Math.min(range.end, pageCount))
    : getRange(1, Math.min(pageCount, delta + 1))

  const withDots = (value: number, pair: number[]): number[] => (pages.length + 1 !== pageCount ? pair : [value])

  if (pages[0] !== 1) {
    pages = withDots(1, [1, -99]).concat(pages)
  }

  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, [-100, pageCount]))
  }

  return pages
}
export default function usePagination(pageIndex: number, pageCount: number): number[] {
  const pages = useMemo(() => pagination(pageIndex, pageCount), [pageIndex, pageCount])
  return pages
}
