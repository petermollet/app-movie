import {floor} from "lodash";

export const MovieDesc = ({movie}) => {
	return (
		<>
			<h1 className="text-3xl font-bold text-green-400">{movie.title}</h1>
			<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Release Date:</p>
					<p className="text-sm ml-2">{movie.release_date}</p>
				</div>
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Runtime:</p>
					<p className="text-sm ml-2">{movie.runtime} minutes</p>
				</div>
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Rating:</p>
					<p className="text-sm ml-2">{floor(movie.vote_average * 10)}%</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Genres:</p>
					<p className="text-sm ml-2">{movie.genres.map((genre) => genre.name).join(', ')}</p>
				</div>
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Status:</p>
					<p className="text-sm ml-2">{movie.status}</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Budget:</p>
					<p className="text-sm ml-2">{movie.budget}</p>
				</div>
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Revenue:</p>
					<p className="text-sm ml-2">{movie.revenue}</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
				<div className="flex items-center">
					<p className="text-sm font-bold text-green-700">Tagline:</p>
					<p className="text-sm ml-2">{movie.tagline}</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
				<div className="flex">
					<p className="text-sm font-bold text-green-700">Overview:</p>
					<p className="text-sm ml-2">{movie.overview}</p>
				</div>
			</div>
		</>
	)
}