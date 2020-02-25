import React from 'react'

type CellFunc = (arg0: string | number) => void
type FixedNumericCellFunc = (arg0: number) => void

export const textCell: CellFunc = (value) => <div>{value}</div>

export const fixedNumberCell: FixedNumericCellFunc = (value) => <div>{value.toFixed(4)}</div>
