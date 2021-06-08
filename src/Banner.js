import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Banner.css";

const baseUrl = "https://api.themoviedb.org/3/";
const baseImage = "https://image.tmdb.org/t/p/original/";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`${baseUrl}${props.url}`);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
      return result;
    }
    fetchData();
  }, [props.url]);

  console.log(movie);

  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${baseImage}${movie.backdrop_path})`,
        }}
      >
        <div className="contents">
          <h2 className="title">{movie.name}</h2>
          <div className="banner_buttons">
            <button className="play_btn">PLAY</button>

            <button className="list_btn">MY LIST</button>
          </div>

          <p className="banner_details">{truncate(movie.overview, 200)}</p>
        </div>

        <div className="fade_bottom"></div>
      </div>
    </header>
  );
}

export default Banner;
