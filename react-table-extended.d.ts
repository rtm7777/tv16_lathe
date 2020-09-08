/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  UseColumnOrderState,
  UseExpandedHooks,
  UseExpandedOptions,
  UseExpandedRowProps,
  UseExpandedState,
  UseFiltersColumnProps,
  UseFiltersOptions,
  UseFiltersState,
  UseGlobalFiltersOptions,
  UseGlobalFiltersState,
  UseGroupByCellProps,
  UseGroupByColumnProps,
  UseGroupByHooks,
  UseGroupByOptions,
  UseGroupByRowProps,
  UseGroupByState,
  UsePaginationOptions,
  UsePaginationState,
  UseResizeColumnsColumnProps,
  UseResizeColumnsOptions,
  UseResizeColumnsState,
  UseRowSelectHooks,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  UseRowSelectState,
  UseRowStateCellProps,
  UseRowStateOptions,
  UseRowStateRowProps,
  UseRowStateState,
} from 'react-table'
import { IntlShape } from 'react-intl'

declare module 'react-table' {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  export interface TableOptions<D extends Record<string, unknown>>
    extends UseExpandedOptions<D>,
    UseFiltersOptions<D>,
    UseFiltersOptions<D>,
    UseGlobalFiltersOptions<D>,
    UseGroupByOptions<D>,
    UsePaginationOptions<D>,
    UseResizeColumnsOptions<D>,
    UseRowSelectOptions<D>,
    UseRowStateOptions<D>,
    UseSortByOptions<D>,
    // note that having Record here allows you to add anything to the options, this matches the spirit of the
    // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
    // feature set, this is a safe default.
    Record<string, any> { }

  export interface Hooks<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseExpandedHooks<D>,
    UseGroupByHooks<D>,
    UseRowSelectHooks<D>,
    UseSortByHooks<D> { }

  export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>> {
    intl: IntlShape
  }

  export interface TableState<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseColumnOrderState<D>,
    UseExpandedState<D>,
    UseFiltersState<D>,
    UseGlobalFiltersState<D>,
    UseGroupByState<D>,
    UsePaginationState<D>,
    UseResizeColumnsState<D>,
    UseRowSelectState<D>,
    UseRowStateState<D>,
    UseSortByState<D> { }

  export interface Column<D extends Record<string, unknown> = Record<string, unknown>> {
    className?: 'table' | 'gearCell'
  }

  export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersColumnProps<D>,
    UseGroupByColumnProps<D>,
    UseResizeColumnsColumnProps<D>,
    UseSortByColumnProps<D> { }

  export interface Cell<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseGroupByCellProps<D>,
    UseRowStateCellProps<D> { }

  export interface Row<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseExpandedRowProps<D>,
    UseGroupByRowProps<D>,
    UseRowSelectRowProps<D>,
    UseRowStateRowProps<D> { }
}
