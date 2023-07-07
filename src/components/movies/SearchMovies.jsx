import {Field, Form, Formik} from "formik";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid/index.js";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../redux/movies.slice.js";

export const SearchMovies = () => {
	const dispatch = useDispatch();
	const search = useSelector((state) => state.movies.search);
	const handleSearch = (values, {setSubmitting}) => {
		const search = values.search.trim();
		dispatch(setSearch(search));
		setSubmitting(false);
	}

	return (
		<Formik
			initialValues={{search: search}}
			onSubmit={handleSearch}
		>
			{({ isSubmitting }) => (
				<Form>
					<div className="inline-flex">
						<Field
							type="text"
							name="search"
							placeholder="Search movies..."
							className="bg-gray-800 text-white px-3 py-2 rounded-md sm:rounded-r-none focus:outline-none focus:ring-0 focus:border-transparent"
						/>
						<button
							type="submit"
							disabled={isSubmitting}
							className="hidden sm:block bg-green-600 text-white px-3 py-2 rounded-r-md
							hover:bg-green-700 focus:outline-none focus:ring-0 focus:ring-green-500 focus:border-transparent"
						>
							<MagnifyingGlassIcon
								className="h-5"
							/>
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}
