import React from "react";
import { useParams } from "react-router-dom";
import { useVideos } from "../../context/videos-context";
import VideoCard from "../VideoListing/VideoCard";

const SinglePlayList = () => {
  const { playlistName } = useParams();
  const {
    videosData: { playlists },
  } = useVideos();
  const playlistVideos = playlists.find(
    (playlist) => playlist.name === playlistName
  );
  
  return (
    <div>
      {playlistVideos.videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default SinglePlayList;
