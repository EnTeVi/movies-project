import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filmsService} from "../../services";

const initialState = {
    films: [],
    error: null,
    loading: null,
    selectedFilm: null
};

const getAll = createAsyncThunk(
    'filmsSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await filmsService.getAll();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'filmsSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await filmsService.getById(id);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState,
    reducers: {
        setSelectedFilm: (state,action) => {
            state.selectedFilm = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.films = action.payload.results;
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
                state.selectedFilm = action.payload.results;
                state.errors = null;
                state.loading = false;
            })
            // .addCase(getById.rejected, (state, action) => {
            //     state.error = action.payload;
            //     state.loading = false;
            // })
            // .addCase(getById.pending, (state) => {
            //     state.loading = true;
            // })
});

const {reducer: filmsReducer, actions: {setSelectedFilm}} = filmsSlice;

const filmsAction = {
    getAll,
    getById,
    setSelectedFilm
}

export {
    filmsReducer,
    filmsAction
}