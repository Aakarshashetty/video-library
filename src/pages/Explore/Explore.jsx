import React from "react";
import { useVideos } from "../../context/videos-context";
import VideoCard from "../VideoListing/VideoCard";
import "./Explore.css";

const Explore = () => {
  const { videosData } = useVideos();
  return (
    <div className="videos">
      <input placeholder="Search video by title" className="search"/>
      <div className="wrapper">
        {videosData.videos.map((video) => (
          <VideoCard key={video._id} video={video} className="video-card"/>
        ))}
      </div>
    </div>
  );
};

export default Explore;
