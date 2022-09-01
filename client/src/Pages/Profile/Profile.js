import { Outlet } from "react-router-dom";
import { Title, LinkTo } from "./Profile.style";

const Profile = () => {
  return (
    <>
      <Title>
        <LinkTo to="watchlist">Watchlist</LinkTo>
        <LinkTo to="watched">Watched</LinkTo>
      </Title>
      <Outlet />
    </>
  );
};

export default Profile;
