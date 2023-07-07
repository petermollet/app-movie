import {apiMovie} from "./apiMovie.js";

export const searchMovies = async (search)=> {
    const url = search ? `/search/movie?query=${search}` : "/discover/movie";
    const response = await apiMovie.get(url);
    return response.data.results;
}

export const getMovie = async (id)=> {
    const response = await apiMovie.get(`/movie/${id}`);
    return response.data;
}

export const getCredits = async (id)=> {
    const response = await apiMovie.get(`/movie/${id}/credits`);
    return response.data;
}