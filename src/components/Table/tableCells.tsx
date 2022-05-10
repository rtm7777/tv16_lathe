import { ReactElement } from 'react'

type CellFunc = (arg0: string | number) => ReactElement
type FixedNumericCellFunc = (arg0: number) => ReactElement

export const textCell: CellFunc = (value) => <div>{value}</div>

export const fixedNumberCell: FixedNumericCellFunc = (value) => <div>{value.toFixed(4)}</div>
