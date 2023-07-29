import React from "react";
import { useNavigate } from "react-router";
import { useVideos } from "../../context/videos-context";
import {BiTimeFive,BiSolidTimeFive} from "react-icons/bi";

const VideoCard = ({ video }) => {
  const { _id, thumbnail, title, category, views, creator } = video;
  const {
    videosData: { watchLater },
    dispatcher,
  } = useVideos();
  const navigate = useNavigate();
  return (
    <div key={_id} className="video-card">
      <img
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        onClick={() => navigate(`/${category}/${title}`)}
        className="thumbnail"
      />
      <div className="details">
        <img
          src="https://fastly.picsum.photos/id/552/40/40.jpg?hmac=Mw1UniWwb5hOw0TBkzRYltrnO3XlOpqOiRw5LT17fXo"
          alt="pc"
        />
        <div>
          <h4>{title}</h4>
          <h4>{category}</h4>
          <small>
            {views} | {creator}
          </small>
        </div>
        <div className="watchlater">
          <button
            onClick={() =>
              watchLater.find(
                (video) =>
                  video.title.split(" ").join("").toLowerCase() ===
                  title.split(" ").join("").toLowerCase()
              )
                ? dispatcher({
                    type: "REMOVE_FROM_WATCH_LATER",
                    payload: video,
                  })
                : dispatcher({
                    type: "ADD_TO_WATCH_LATER",
                    payload: video,
                  })
            }
          >
            {watchLater.find(
              (video) =>
                video.title.split(" ").join("").toLowerCase() ===
                title.split(" ").join("").toLowerCase()
            )
              ? <BiSolidTimeFive/>
              : <BiTimeFive/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
