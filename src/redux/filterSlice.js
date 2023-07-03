import { createSlice } from "@reduxjs/toolkit";
import { FILTER } from './constants';

const filterInitState = '';

const filterSlice = createSlice({
    name: FILTER,
    initialState: filterInitState,
    reducer: {
        setFilter(state , action) {
            return action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;