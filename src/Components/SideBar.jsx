import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/watchLater">Watch Later</NavLink>
      <NavLink to="/playlists">Playlists</NavLink>
    </div>
  );
};

export default SideBar;
