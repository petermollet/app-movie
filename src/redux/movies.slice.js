import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
    search: ""
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addFavorite(state, action) {
            const isFavorite = state.favorites.findIndex(movie => movie.id === action.payload.id);
            if (isFavorite === -1)  state.favorites.push(action.payload);
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter(m => m.id !== action.payload);
        },
        setSearch(state, action) {
            state.search = action.payload;
        }
    }
})

export const { addFavorite, removeFavorite, setSearch } = moviesSlice.actions;

export const selectIsFavorite = (state, id) => state.movies.favorites.findIndex(movie => movie.id === id) !== -1;

export default moviesSlice.reducer;
