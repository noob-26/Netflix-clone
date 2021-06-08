import React, {useState, useEffect} from "react";
import "./Row.css";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const baseImage = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${props.url}`);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.url]);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row__movies">
        {movies.map((movie) => (
          <img
          key={movie.id}
            className={`item__movie${props.isLarge?`large`:''}`}
            src={`${baseImage}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
