import FilterActionTypes from './filter.types';

export const setFilters = filtersSetting => ({
  type: FilterActionTypes.SET_FILTERS,
  payload: filtersSetting
});