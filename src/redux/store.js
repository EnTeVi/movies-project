import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "./slice/filmsSlice";

const rootReducer = combineReducers({
    films: filmsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}