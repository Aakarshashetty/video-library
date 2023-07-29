import React, { useState } from "react";
import { useParams } from "react-router";
import { useVideos } from "../../context/videos-context";
import AddToPlayList from "../../Components/AddToPlayList";
import AddAndEditNotes from "../../Components/AddAndEditNotes";

const SingleVideo = () => {
  const { title } = useParams();
  const { videosData, dispatcher } = useVideos();
  const video = videosData.videos.find(
    (video) =>
      video.title.split(" ").join("").toLowerCase() ===
      title.split(" ").join("").toLowerCase()
  );
  const [userNotes, setUserNotes] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);
  return (
    <div>
      <iframe
        width={560}
        height={315}
        src={video.src}
        title={video.title}
        allowFullScreen
        frameBorder="0"
      />
      <div>
        <h3>{video.title}</h3>
        <div>
          <button
            onClick={() =>
              dispatcher({ type: "ADD_TO_WATCH_LATER", payload: video })
            }
          >
            Watch Later
          </button>
          <AddToPlayList video={video} />
          <AddAndEditNotes key="add"/>
        </div>
        <h2>My Notes</h2>
        <div>
          {videosData.notes?.map((note) => (
            <div  key={note.id}>
              <p>{note.note}</p>
              <div>
                <button onClick={()=>setShowEditPopup(true)}>Edit</button>
                <button onClick={()=>dispatcher({type:"DELETE_NOTES",payload:note})}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showEditPopup && (
        <div>
          <h3>Edit Note</h3>
          <input
            type="text"
            placeholder="New notes"
            defaultValue={userNotes}
            onChange={(e) => setUserNotes(e.target.value)}
          />
          <button
            onClick={() => {
              dispatcher({ type: "EDIT_NOTES", payload: userNotes });
              setUserNotes("");
              setShowEditPopup(false);
            }}
          >
            Edit Note
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleVideo;
