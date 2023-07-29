import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import Explore from "./pages/Explore/Explore";
import VideoListing from "./pages/VideoListing/VideoListing";
import SingleVideo from "./pages/SingleVideo/SingleVideo";
import WatchLater from "./pages/WatchLater/WatchLater";
import SideBar from "./Components/SideBar";
import SinglePlayList from "./pages/Playlists/SinglePlayList";

function App() {
  return (
    <div className="App">
      <h1>Video Library</h1>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/playlists" element={<Playlists/>}/>
        <Route path="/watchLater" element={<WatchLater/>}/>
        <Route path="/:category" element={<VideoListing/>}/>
        <Route path="/:category/:title" element={<SingleVideo/>}/>
        <Route path="/playlist/:playlistName" element={<SinglePlayList/>}/>
      </Routes>
    </div>
  );
}

export default App;
