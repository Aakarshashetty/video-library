import React from 'react'
import { useVideos } from '../../context/videos-context'
import VideoCard from '../VideoListing/VideoCard';

const Explore = () => {
  const {videosData} = useVideos();
  return (
    <div>
      <input placeholder='Search video by title'/>
      <div>
        {
          videosData.videos.map(video => <VideoCard key={video._id} video={video}/>)
        }
      </div>
    </div>
  )
}

export default Explore