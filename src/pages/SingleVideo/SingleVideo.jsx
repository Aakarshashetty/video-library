import React from "react";
import { useParams } from "react-router";
import { useVideos } from "../../context/videos-context";

const SingleVideo = () => {
  const { title } = useParams();
  const { videosData,dispatcher } = useVideos();
  const video = videosData.videos.find(
    (video) =>
      video.title.split(" ").join("").toLowerCase() ===
      title.split(" ").join("").toLowerCase()
  );

  return (
    <div>
      <iframe
        width={560}
        height={315}
        src={video.src}
        title={video.title}
        allowFullScreen
        frameBorder="0"
      />
      <div>
        <h3>{video.title}</h3>
        <div>
          <button onClick={()=>dispatcher({type:"ADD_TO_WATCH_LATER",payload:video})}>Watch Later</button>
          <button>Add to playlist</button>
          <button>Add notes</button>
        </div>
        <h2>My Notes</h2>
      </div>
    </div>
  );
};

export default SingleVideo;
