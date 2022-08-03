import "./card.css";

const arr = [];
for (let x = 0; x < 20; x++) {
  arr.push(x);
}

const movie = {
  id: 507086,
  title: "Jurassic World Dominion",
  overview:
    "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
  vote_average: 7.1,
  vote_count: 2377,
  release_date: "2022-06-01",
  poster_path:
    "https://image.tmdb.org/t/p/original/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
  genre_id: [12, 28, 878],
};

const Card = () => {
  return (
    <div className="container">
      {arr.map((item, index) => {
        return <Cards key={index} />;
      })}
    </div>
  );
};

const Cards = () => {
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
