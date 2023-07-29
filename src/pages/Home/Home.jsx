import React from "react";
import { useVideos } from "../../context/videos-context";
import { useNavigate } from "react-router";
import "./Home.css";

const Home = () => {
  const { videosData } = useVideos();
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Categories</h2>
      <div className="categories">
        {videosData.categories.map(({ _id, thumbnail, category }) => (
          <div key={_id} onClick={() => navigate(`/${category}`)}>
            <img src={thumbnail} alt={category} width={250} height={150} />
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
