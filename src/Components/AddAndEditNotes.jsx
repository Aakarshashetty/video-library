import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useVideos } from "../context/videos-context";
import {MdEditNote} from "react-icons/md"

const AddAndEditNotes = () => {
  const [userNotes, setUserNotes] = useState({ id: uuid(), note: "" });

  const { dispatcher } = useVideos();
  return (
    <Popup
      trigger={<button className="button"> <MdEditNote/> </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>

          <div className="content">
            <h3>Add Note</h3>
            <input
              type="text"
              placeholder="New notes"
              defaultValue={userNotes.note}
              onChange={(e) =>
                setUserNotes({ ...userNotes, note: e.target.value })
              }
            />
            <button
              onClick={() => {
                dispatcher({ type: "ADD_NEW_NOTES", payload: userNotes });
                setUserNotes("");
                close();
              }}
            >
              Add New Note
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddAndEditNotes;
