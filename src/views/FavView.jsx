import {PageLayout} from "../components/layout/PageLayout.jsx";
import {useSelector} from "react-redux";
import {MovieList} from "../components/movies/MovieList.jsx";

const FavView = () => {
	const favorites = useSelector((state) => state.movies.favorites);
	return (
		<PageLayout>
			<MovieList movies={favorites}/>
		</PageLayout>
	)
}

export default FavView
