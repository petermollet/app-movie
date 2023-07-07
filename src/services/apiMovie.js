import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQxNjQxMDE1YjhiNGI3NGQ0YTIwMjFiNzdmZTg0MyIsInN1YiI6IjVkN2Y4YzcxZjA2NDdjNzYyOTlkOTA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EmWZH4xxIUqMRiNfievB0a_-fNJ84g4Jv3GB_J2wFP0";

export const apiMovie = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

apiMovie.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${token}`;
    return request;
});
