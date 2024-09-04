import {createSlice} from '@reduxjs/toolkit';
import { fetchCampers, selectedCamperById } from './operations';

const handlePending = state => {
    state.loading = true;
};

const handleRejection = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    extraReducers: builder => {
     builder
        .addCase(fetchCampers.pending, handlePending)
        .addCase(fetchCampers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchCampers.rejected, handleRejection)
        .addCase(selectedCamperById.pending, handlePending)
        .addCase(selectedCamperById.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.selectedItem = action.payload;
        })
        .addCase(selectedCamperById.rejected, handleRejection)
    },
})

export const campersReducer = campersSlice.reducer;