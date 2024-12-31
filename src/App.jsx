// Consolidate imports for readability
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import WatchList from "./components/WatchList";

export default function App() {
  // State to manage movie data
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  // Fetch movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("movies.json");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const toggleWatchList = (moviesId) => {
    setWatchList((prev) =>
      prev.includes(moviesId)
        ? prev.filter((id) => id !== moviesId)
        : [...prev, moviesId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  watchList={watchList}
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <WatchList
                  watchList={watchList}
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
