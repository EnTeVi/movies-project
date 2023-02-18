import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    films: [],
    error: null,
    loading: null
};

const filmsSlice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload;
        }
    }
});

const {reducer: filmsReducer, actions: {getAll}} = filmsSlice;

const filmsAction = {
    getAll
}

export {
    filmsReducer,
    filmsAction
}