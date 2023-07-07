import {MovieCard} from "./MovieCard.jsx";

export const MovieList = ({ movies }) => {
	return (
		<div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6">
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie}/>
			))}
		</div>
	)
}
