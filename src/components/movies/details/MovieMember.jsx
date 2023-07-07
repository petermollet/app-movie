import ImageLazy from "../../utils/ImageLazy.jsx";

export const MovieMember = ({ member }) => {
	return (
		<div className="flex flex-col items-center">
			<ImageLazy
				src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
				alt=""
				className="rounded-full w-24 h-24"
			/>
			<div className="text-center">
				<h3 className="text-lg font-bold">{member.name}</h3>
				<p className="text-sm text-gray-500">{member.character}</p>
			</div>
		</div>
	)
}