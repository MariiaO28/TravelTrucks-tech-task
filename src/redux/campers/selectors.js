import { createSelector } from '@reduxjs/toolkit';
import { selectFilters, selectFiltersByLocation } from '../filters/selectors.js';

export const selectCampers = state => state.campers.items;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectCamperById = state => state.campers.selectedItem;

export const selectCampersByLocation = createSelector(
    [selectCampers, selectFiltersByLocation],
    (campers, location) => {
        if(!location) return campers;
        return campers.filter(camper => 
           camper.location.toLowerCase().includes(location.toLowerCase())
        );
    }
);

export const selectCampersByForm = createSelector(
    [selectCampers, selectFilters],
    (campers, filters) => {
        if (filters.form === "all") return campers;
        return campers.filter(camper => camper.form === filters.form);
    }
);
export const selectCampersByFeatures = createSelector(
    [selectCampers, selectFilters],
    (campers, filters) => {
        if (
            !filters.AC && !filters.bathroom && !filters.kitchen &&
            !filters.TV && !filters.transmission.automatic
        ) {
            return campers;
        }

        return campers.filter(camper => {
           const hasAirConditioning = filters.AV ? camper.AV : true;
           const matchesTransmissionType =  filters.transmission ? camper.transmission === 'automatic' : true;
           const hasKitchen = filters.kitchen ? camper.kitchen : true;
           const hasTV = filters.TV ? camper.TV : true;
           const hasBathroom = filters.bathroom ? camper.bathroom : true;

           return hasAirConditioning && matchesTransmissionType && hasKitchen && hasTV && hasBathroom;
        });
    }
);