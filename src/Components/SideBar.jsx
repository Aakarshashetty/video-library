import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css"
import {AiFillHome} from "react-icons/ai";
import {MdExplore,MdPlaylistAdd} from "react-icons/md";
import {BiSolidTimeFive} from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/"><AiFillHome/> Home</NavLink>
      <NavLink to="/explore"><MdExplore/> Explore</NavLink>
      <NavLink to="/watchLater"><BiSolidTimeFive/> Watch Later</NavLink>
      <NavLink to="/playlists"><MdPlaylistAdd/> Playlists</NavLink>
    </div>
  );
};

export default SideBar;
