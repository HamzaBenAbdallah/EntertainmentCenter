import { useContext } from "react";
import { MovieContext } from "Services/MovieContext";
import "./card.css";

const Card = () => {
  const { movies, isLoading } = useContext(MovieContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {movies.map((movie, index) => {
        return <Cards movie={movie} key={index} />;
      })}
    </div>
  );
};

const Cards = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.poster_path} alt={movie.title} />
      <div className="card-detail">
        <div className="header">
          <div className="title">{movie.title}</div>
          <div className="genre">Action</div>
        </div>
        <div className="content">
          <div className="overview">{movie.overview}</div>
        </div>
        <div className="footer">{movie.vote_average}</div>
      </div>
    </div>
  );
};

export default Card;
