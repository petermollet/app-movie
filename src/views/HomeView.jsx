import {PageLayout} from "../components/layout/PageLayout.jsx";
import {useEffect, useState} from "react";
import {MovieList} from "../components/movies/MovieList.jsx";
import {useSelector} from "react-redux";
import {searchMovies} from "../services/movie.services.js";

const HomeView = () => {
    const search = useSelector((state) => state.movies.search);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies(search).then((data) => setMovies(data));
    }, [search]);

    return (
        <PageLayout>
           <MovieList movies={movies}/>
        </PageLayout>
    )
}

export default HomeView
