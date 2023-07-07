import {NavLink} from "react-router-dom";
import {URL_FAVORITES, URL_HOME} from "../../constants/urls/urlFront.js";
import Logo from "../../assets/image/logo-app.png";
import {SearchMovies} from "../movies/SearchMovies.jsx";

const NavBar = () => {
	return (
		<nav className="bg-slate-900 px-3 py-4 sticky top-0 z-50 shadow-2xl">
			<div className="container mx-auto flex justify-between items-center space-x-3">
				<NavLink to={URL_HOME}>
					<img
						src={Logo}
						alt=""
						className="w-32"
					/>
				</NavLink>
				<SearchMovies/>
				<div>
					<NavLink className="link" to={URL_FAVORITES}>Favorites</NavLink>
				</div>
			</div>

		</nav>
	)
}

export default NavBar
