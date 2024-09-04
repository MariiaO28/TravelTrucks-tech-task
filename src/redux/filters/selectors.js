import { createSelector } from '@reduxjs/toolkit';
export const selectFilters = state => state.filters;

export const selectFiltersByLocation = createSelector(
  [selectFilters],
  filters => filters.location
);