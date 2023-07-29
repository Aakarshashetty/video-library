import React from 'react'
import { useVideos } from '../../context/videos-context'
import VideoCard from '../VideoListing/VideoCard';

const WatchLater = () => {
  const {videosData} = useVideos();
  return (
    <div>
      <h2>Watch Later</h2>
      {
        videosData.watchLater.map(video => <VideoCard key={video._id} video={video}/>)
      }
    </div>
  )
}

export default WatchLater