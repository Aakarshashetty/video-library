import React from "react";
import { useParams } from "react-router";
import { useVideos } from "../../context/videos-context";
import { useNavigate } from "react-router";

const VideoListing = () => {
  const { category } = useParams();
  const { videosData } = useVideos();
  const navigate = useNavigate();
  const categoryData = videosData.videos.filter(
    (video) => video.category === category
  );
  return (
    <div>
      <h2>{category}</h2>
      <div>
        {categoryData.map(
          ({ _id, title, views, thumbnail, creator, category }) => (
            <div key={_id} onClick={()=>navigate(`/${category}/${title}`)}>
              <img src={thumbnail} alt={title} width={200} height={200} />
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
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default VideoListing;
