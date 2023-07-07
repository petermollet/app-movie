import {truncate} from 'lodash'
import {Score} from "./Score.jsx";
import ImageLazy from "../utils/ImageLazy.jsx";
import {Link} from "react-router-dom";
import {MovieFavIcon} from "./MovieFavIcon.jsx";

const OVERVIEW_CUT_OFF = 200;

export const MovieCard = ({movie}) => {


	return (
		<Link className="relative hover:shadow-lg group text-left" to={`/movie/${movie.id}`}>
			<ImageLazy
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				className="rounded-lg"
			/>
			<div
				className="absolute bottom-0 left-0 inset-0 bg-gradient-to-br from-black from-5% via-transparent to-black to-95% rounded-lg
				group-hover:bg-black group-hover:opacity-70 group-hover:border-8 border-gray-500 group-hover:blur
				transition-all duration-150 ease-in"
			/>
			<div className="absolute top-0 left-0 w-full p-4 scale-0 group-hover:scale-100 flex flex-col space-y-3 transition-all duration-100 ease-in">
				<p className="text-sm font-bold text-white">{movie.title}</p>
				<small className="text-xs font-bold text-white">{movie.release_date}</small>
				<p className="text-xs text-gray-300 hidden group-hover:block">
					{truncate(movie.overview, {length: OVERVIEW_CUT_OFF})}
				</p>
			</div>
			<div className="absolute bottom-0 right-0 p-2">
				<MovieFavIcon movie={movie}/>
			</div>
			<div className="hidden absolute bottom-0 left-0 p-2 group-hover:block">
				<Score number={movie.vote_average}/>
			</div>
		</Link>
	)
}
