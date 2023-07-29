import React from "react";
import { useParams } from "react-router";
import { useVideos } from "../../context/videos-context";

import VideoCard from "./VideoCard";
import "./Videos.css";

const VideoListing = () => {
  const { category } = useParams();
  const { videosData } = useVideos();

  const categoryData = videosData.videos.filter(
    (video) => video.category === category
  );
  return (
    <div className="category-videos">
      <h2>{category}</h2>
      <div className="category-videos-wrapper">
        {categoryData.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoListing;
