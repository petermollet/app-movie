import {NavLink} from "react-router-dom";
import {URL_FAVORITES, URL_HOME} from "../../constants/urls/urlFront.js";

const NavBar = () => {
	return (
		<nav className="bg-slate-900 px-3 py-4">
			<div className="container mx-auto flex justify-between items-center">
				<h5>
					<NavLink to={URL_HOME}>Home</NavLink>
				</h5>
				<div>
					<NavLink className="link" to={URL_FAVORITES}>Favorites</NavLink>
				</div>
			</div>

		</nav>
	)
}

export default NavBar