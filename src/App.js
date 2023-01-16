import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//8504efd3

const API_URL = "http://www.omdbapi.com/?apikey=8504efd3";

//I used this part of code static before dynamically rendered the components in order to see how the page look like!!!
// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   Type: "movie",
//   Poster: "N/A",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>;
      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
