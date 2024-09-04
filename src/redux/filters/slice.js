import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: "",
        form: "",
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
        transmission: {
            automatic: false,
        },
    },
    reducers: {
        setLocation(state, action) {
          state.location = action.payload;
        },
        setForm(state, action) {
          state.form = action.payload;
        },
        setAC(state, action) {
          state.AC = action.payload;
        },
        setBathroom(state, action) {
          state.bathroom = action.payload;
        },
        setKitchen(state, action) {
          state.kitchen = action.payload;
        },
        setTV(state, action) {
          state.TV = action.payload;
        },
        setTransmissionType(state, action) {
          state.transmission.automatic = action.payload;
        },
      },
});

export const { setLocation, setForm, setAC, setBathroom, setKitchen, setTV, setTransmissionType } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;