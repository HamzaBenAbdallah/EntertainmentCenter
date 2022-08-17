import { Link, Outlet } from "react-router-dom";
import { Title } from "./Profile.style";

const Profile = () => {
  return (
    <>
      <Title>
        <Link to="watchlist">Watchlist</Link>
        <Link to="watched">Watched</Link>
      </Title>
      <Outlet />
    </>
  );
};

export default Profile;
