import {PageLayout} from "../components/layout/PageLayout.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCredits, getMovie} from "../services/movie.services.js";
import ImageLazy from "../components/utils/ImageLazy.jsx";
import {Loading} from "../components/utils/Loading.jsx";
import {MovieDesc} from "../components/movies/details/MovieDesc.jsx";
import {MovieMember} from "../components/movies/details/MovieMember.jsx";
import {MovieFavIcon} from "../components/movies/MovieFavIcon.jsx";

export const MovieView = () => {
	const {id} = useParams();
	const [movie, setMovie] = useState({});
	const [credits, setCredits] = useState([]);

	useEffect(() => {
		getMovie(id).then((data) => setMovie(data))
		getCredits(id).then((data) => setCredits(data.cast));
	}, [id]);

	if(!movie.id) return <Loading />
	return (
		<PageLayout>
			<div className="container mx-auto py-3 flex flex-col space-y-5">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-1/3 relative">
						<ImageLazy
							src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
							className="rounded-lg"
						/>
						<div className="absolute top-0 left-0 m-3 scale-125 bg-gray-900 rounded-full pt-2 px-2">
							<MovieFavIcon movie={movie}/>
						</div>
					</div>
					<div className="w-full md:w-2/3 p-4 flex flex-col space-y-3">
						<MovieDesc movie={movie}/>
					</div>
				</div>
				<div className="w-full">
					<h2 className="text-2xl font-bold text-green-400">Cast</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6">
						{credits.map((cast) => <MovieMember key={cast.id} member={cast}/> )}
					</div>
				</div>
				<div className="w-full">
					<ImageLazy
						src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						className="rounded-lg"
					/>
				</div>
			</div>
		</PageLayout>
	)
}