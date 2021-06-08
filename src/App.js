import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner url="tv/popular?api_key=cf576357328769c8d72efb9aae01a631&language=en-US" />
      <Row
        title="Netflix Originals"
        url="tv/popular?api_key=cf576357328769c8d72efb9aae01a631&language=en-US"
        isLarge={true}
      />
      <Row
        title="Trending Now"
        url="trending/all/week?api_key=cf576357328769c8d72efb9aae01a631&language=en-US"
      />
      <Row
        title="Top Rated"
        url="movie/top_rated?api_key=cf576357328769c8d72efb9aae01a631&language=en-US&page=1"
      />
      <Row
        title="Top Action Movies"
        url="discover/movie?api_key=cf576357328769c8d72efb9aae01a631&with_genres=28"
      />
      <Row
        title="Top Comedy Movies"
        url="discover/movie?api_key=cf576357328769c8d72efb9aae01a631&with_genres=35"
      />
      <Row
        title="Top Horror Movies"
        url="discover/movie?api_key=cf576357328769c8d72efb9aae01a631&with_genres=27"
      />
      <Row
        title="Top Science Fiction Movies"
        url="discover/movie?api_key=cf576357328769c8d72efb9aae01a631&with_genres=878"
      />
      <Row
        title="Top Thriller Movies"
        url="discover/movie?api_key=cf576357328769c8d72efb9aae01a631&with_genres=53"
      />
    </div>
  );
}
export default App;
