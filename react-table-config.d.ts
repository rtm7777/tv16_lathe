import {
  UseColumnOrderInstanceProps,
  UseColumnOrderState,
  UseExpandedHooks,
  UseExpandedInstanceProps,
  UseExpandedOptions,
  UseExpandedRowProps,
  UseExpandedState,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersState,
  UseGlobalFiltersColumnOptions,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersState,
  UseGroupByCellProps,
  UseGroupByColumnOptions,
  UseGroupByColumnProps,
  UseGroupByHooks,
  UseGroupByInstanceProps,
  UseGroupByOptions,
  UseGroupByRowProps,
  UseGroupByState,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseResizeColumnsColumnOptions,
  UseResizeColumnsColumnProps,
  UseResizeColumnsOptions,
  UseResizeColumnsState,
  UseRowSelectHooks,
  UseRowSelectInstanceProps,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  UseRowSelectState,
  UseRowStateCellProps,
  UseRowStateInstanceProps,
  UseRowStateOptions,
  UseRowStateRowProps,
  UseRowStateState,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
} from 'react-table'
import { IntlShape } from 'react-intl'

declare module 'react-table' {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  export interface TableOptions<D>
    extends UseExpandedOptions<D>,
    UseGroupByOptions<D>,
    UsePaginationOptions<D>,
    UseResizeColumnsOptions<D>,
    UseRowSelectOptions<D>,
    UseRowStateOptions<D>,
    UseSortByOptions<D>,
    // note that having Record here allows you to add anything to the options, this matches the spirit of the
    // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
    // feature set, this is a safe default.
    Record<string, any> {}

  export interface Hooks<D>
    extends UseExpandedHooks<D>,
    UseGroupByHooks<D>,
    UseRowSelectHooks<D>,
    UseSortByHooks<D> {}

  export interface TableInstance<D>
    extends UseColumnOrderInstanceProps<D>,
    UseExpandedInstanceProps<D>,
    UseFiltersInstanceProps<D>,
    UseGlobalFiltersInstanceProps<D>,
    UseGroupByInstanceProps<D>,
    UsePaginationInstanceProps<D>,
    UseRowSelectInstanceProps<D>,
    UseRowStateInstanceProps<D>,
    UseSortByInstanceProps<D> {intl: IntlShape}

  // export interface TableInstance<D> {
  //   intl: IntlShape
  // }

  export interface TableState<D>
    extends UseColumnOrderState<D>,
    UseExpandedState<D>,
    UseFiltersState<D>,
    UseGlobalFiltersState<D>,
    UseGroupByState<D>,
    UsePaginationState<D>,
    UseResizeColumnsState<D>,
    UseRowSelectState<D>,
    UseRowStateState<D>,
    UseSortByState<D> {}

  export interface ColumnInterface<D>
    extends UseFiltersColumnOptions<D>,
    UseGlobalFiltersColumnOptions<D>,
    UseGroupByColumnOptions<D>,
    UseResizeColumnsColumnOptions<D>,
    UseSortByColumnOptions<D> {className?: 'table' | 'gearCell'}

  export interface ColumnInstance<D>
    extends UseFiltersColumnProps<D>,
    UseGroupByColumnProps<D>,
    UseResizeColumnsColumnProps<D>,
    UseSortByColumnProps<D> {}

  export interface Cell<D>
    extends UseGroupByCellProps<D>,
    UseRowStateCellProps<D> {}

  export interface Row<D>
    extends UseExpandedRowProps<D>,
    UseGroupByRowProps<D>,
    UseRowSelectRowProps<D>,
    UseRowStateRowProps<D> {}
}
