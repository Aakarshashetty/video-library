import React from "react";
import { useNavigate } from "react-router";
import { useVideos } from "../../context/videos-context";

const VideoCard = ({ video }) => {
  const { _id, thumbnail, title, category, views, creator } = video;
  const {
    videosData: { watchLater },
    dispatcher,
  } = useVideos();
  const navigate = useNavigate();
  return (
    <div key={_id}>
      <img
        src={thumbnail}
        alt={title}
        width={200}
        height={200}
        onClick={() => navigate(`/${category}/${title}`)}
      />
      <div>
        <img
          src="https://fastly.picsum.photos/id/552/40/40.jpg?hmac=Mw1UniWwb5hOw0TBkzRYltrnO3XlOpqOiRw5LT17fXo"
          alt="pc"
        />
        <div>
          <h4>{title}</h4>
          <h4>{category}</h4>
          <p>
            {views} | {creator}
          </p>
        </div>
        <div>
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
              ? "Remove"
              : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
