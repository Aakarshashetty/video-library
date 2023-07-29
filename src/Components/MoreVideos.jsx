import React from "react";
import { useVideos } from "../context/videos-context";
import "./MoreVideos.css";

const MoreVideos = () => {
  const { videosData } = useVideos();
  return (
    <div className="more-videos">
      <h3>More videos</h3>
      <div className="more-vedios-videos">
        {videosData.videos.map(({ _id, title, creator, thumbnail }) => (
          <div key={_id} className="more-vedios-videos-details">
            <img src={thumbnail} alt={title} width={200} height={120} />
            <div>
              <p>{title}</p>
              <p>{creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreVideos;
