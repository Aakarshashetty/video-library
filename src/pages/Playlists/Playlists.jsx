import React from "react";
import { useVideos } from "../../context/videos-context";
import { useNavigate } from "react-router";

const Playlists = () => {
  const {
    videosData: { playlists },dispatcher
  } = useVideos();
  const navigate = useNavigate();
  return (
    <div>
      {playlists.map(({ name, thumbnail }) => (
        <div key={name}>
          <img
            src={thumbnail}
            alt={name}
            onClick={() => navigate(`/playlist/${name}`)}
          />
          <h3>{name}</h3>
          <button onClick={()=>dispatcher({type:"REMOVE_PLAYLIST",payload:name})}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
