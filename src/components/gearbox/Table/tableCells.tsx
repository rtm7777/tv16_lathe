import React from 'react'
import { IntlShape } from 'react-intl'
import { ColumnInstance } from 'react-table'

type HeaderFunc = (arg0: ColumnInstance, arg1: IntlShape) => void
type CellFunc = (arg0: number) => void

export const headerCell: HeaderFunc = (column, intl) => <div>{intl.formatMessage({ id: `table.${column.id}` })}</div>

export const gearCell: CellFunc = (value) => <div>{value}</div>

export const fixedValueCell: CellFunc = (value) => <div>{value.toFixed(4)}</div>
