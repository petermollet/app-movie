import {configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./movies.slice.js";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistedMovies = persistReducer(
    { key: 'movies', storage: storage },
    favoritesReducer
);


export const store = configureStore({
    reducer: {
        movies: persistedMovies,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store);