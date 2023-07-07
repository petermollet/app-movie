import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import FavView from "./views/FavView.jsx";
import * as URL from "./constants/urls/urlFront.js"
import NavBar from "./components/layout/NavBar.jsx";
import {MovieView} from "./views/MovieView.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path={URL.URL_HOME} element={<HomeView />} />
            <Route path={URL.URL_FAVORITES} element={<FavView />} />
            <Route path={URL.URL_MOVIE_DETAIL} element={<MovieView />} />
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
