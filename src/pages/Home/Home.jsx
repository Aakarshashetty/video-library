import React from 'react'
import { useVideos } from '../../context/videos-context'
import { useNavigate } from 'react-router';

const Home = () => {
  const {videosData} = useVideos();
  const navigate = useNavigate();
  return (
    
    <div>
      <h2>Categories</h2>
      <div>
        {
          videosData.categories.map(({_id,thumbnail,category}) => <div key={_id} onClick={()=>navigate(`/${category}`)}>
            <img src={thumbnail} alt={category} width={200} height={200}/>
            <h3>{category}</h3>
          </div>)
        }
      </div>
    </div>
  )
}

export default Home