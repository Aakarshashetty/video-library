import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import SaveLater from "./pages/SaveLater/SaveLater";
import Explore from "./pages/Explore/Explore";
import VideoListing from "./pages/VideoListing/VideoListing";
import SingleVideo from "./pages/SingleVideo/SingleVideo";

function App() {
  return (
    <div className="App">
      <h1>Video Library</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/playlists" element={<Playlists/>}/>
        <Route path="/saveLater" element={<SaveLater/>}/>
        <Route path="/:category" element={<VideoListing/>}/>
        <Route path="/:category/:title" element={<SingleVideo/>}/>
      </Routes>
    </div>
  );
}

export default App;
