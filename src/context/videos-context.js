import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../Reducer/videoReducer";
import { categories } from "../Data/categories";
import { videos } from "../Data/videos";

const VideoContext = createContext();
export const VideoContextProvider = ({children})=>{
    const [videosData,dispatcher] = useReducer(videoReducer,{
        categories:categories,
        videos:videos,
        watchLater:[],
        playlists:[]
    })
    
    return(
        <VideoContext.Provider value={{videosData,dispatcher}}>
            {children}
        </VideoContext.Provider>
    )
}
export const useVideos = ()=>useContext(VideoContext)