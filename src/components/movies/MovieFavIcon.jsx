import {HeartIcon as HeartIconFull} from "@heroicons/react/24/solid/index.js";
import {HeartIcon as  HeartIconOutline} from "@heroicons/react/24/outline/index.js";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite, selectIsFavorite} from "../../redux/movies.slice.js";

export const MovieFavIcon = ({ movie }) => {
	const isFavorite = useSelector(state => selectIsFavorite(state, movie.id));
	const dispatch = useDispatch();

	const handleFavorite = (e) => {
		e.preventDefault();
		if(isFavorite) dispatch(removeFavorite(movie.id));
		else dispatch(addFavorite(movie));
	}

	const FavIcon = isFavorite ? HeartIconFull : HeartIconOutline;

	return (
		<button
			className=""
			onClick={handleFavorite}
		>
			<FavIcon className="h-5 text-red-500"/>
		</button>
	)
}