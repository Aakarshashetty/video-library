import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useVideos } from "../context/videos-context";

const AddToPlayList = ({ video }) => {
  const {
    videosData: { playlists },
    dispatcher,
  } = useVideos();

  const [playlist, setPlaylist] = useState({
    name: "",
    desc: "",
    videos: [],
    thumbnail: "https://picsum.photos/seed/picsum/100/100",
  });
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  
  return (
    <Popup
      trigger={<button className="button"> Add to Playlist </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>

          <div className="content">
            <h3>Add to Playlist</h3>
            <div>
              <input
                type="text"
                placeholder="Enter title of playlist"
                onChange={(e) => {
                  setPlaylist({ ...playlist, name: e.target.value });
                }}
                value={playlist.name}
              />
              <input
                type="text"
                placeholder="Write a description"
                onChange={(e) => {
                  setPlaylist({ ...playlist, desc: e.target.value });
                }}
                value={playlist.desc}
              />
              <button
                onClick={() => {
                  dispatcher({ type: "ADD_PLAYLIST", payload: playlist });
                  setPlaylist({ name: "", desc: "" });
                }}
                disabled={
                  playlist.name === "" || playlist.desc === "" ? true : false
                }
              >
                Create New Playlist
              </button>
            </div>
            <h3>Playlists</h3>
            {playlists.map((playlist) => (
              <div key={playlist.name}>
                <label>
                  <input
                    type="checkbox"
                    value={playlist.name}
                    onChange={(e) =>setSelectedPlaylist(e.target.value)}
                  />
                  <p>{playlist.name}</p>
                </label>
                <button onClick={()=>dispatcher({type:"REMOVE_PLAYLIST",payload:playlist.name})}>Remove</button>
              </div>
            ))}
          </div>
          <div>
            <button
              disabled={selectedPlaylist === "" ? true:false}
              onClick={() =>
               { dispatcher({
                  type: "ADD_VIDEO_TO_PLAYLISTS",
                  payload: { video, selectedPlaylist },
                });close();
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddToPlayList;
