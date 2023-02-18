import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {filmsService} from "../../services";

const initialState = {
    films: [],
    error: null,
    loading: null,
    selectedFilm: null,
    searchQ: [],
    genresS: []
};

const getAll = createAsyncThunk(
    'filmsSlice/getAll',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await filmsService.getAll(page, with_genres);
            console.log('page',page, 'ganres',with_genres)
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'filmsSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await filmsService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const getByIdSearch = createAsyncThunk(
    'filmsSlice/getByIdSearch',
    async (name, {rejectWithValue}) => {
        try {
            const {data} = await filmsService.search(name);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getByIdGenres = createAsyncThunk(
    'filmsSlice/getByIdGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await filmsService.genres();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)


const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState,
    reducers: {
        removeFilm: (state, action) => {
            state.selectedFilm = state.selectedFilm.filter(film => film.id !== action.payload.id);
        },
        removeSearch: (state, action) => {
            state.searchQ = state.searchQ.filter(search => search.id !== action.payload.id);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {total_pages} = action.payload;
                state.films = action.payload.results;
                state.total_pages = total_pages;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.selectedFilm = action.payload;
                state.errors = null;
                state.loading = false;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getByIdSearch.fulfilled, (state, action) => {
                state.searchQ = action.payload.results;
            })
            .addCase(getByIdGenres.fulfilled, (state, action) => {
                state.genresS = action.payload.genres;
            })
});

const {reducer: filmsReducer, actions: {removeFilm, removeSearch}} = filmsSlice;

const filmsAction = {
    getAll,
    getById,
    getByIdSearch,
    getByIdGenres,
    removeFilm,
    removeSearch
}

export {
    filmsReducer,
    filmsAction
}