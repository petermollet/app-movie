import {StarIcon} from "@heroicons/react/20/solid/index.js";
import {floor} from "lodash";

export const Score = ({ number }) => {
	return (
		<div className="flex items-center space-x-2">
			<StarIcon className="h-3 text-yellow-500"/>
			<span className="text-gray-300 text-sm font-bold">{floor(number * 10)}%</span>
		</div>

	)
}