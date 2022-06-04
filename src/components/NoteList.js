import React ,{useState} from "react";
import { useSelector , useDispatch} from "react-redux";
import {deleteNote} from "../store/noteSlice"
function NoteList() {
  const dispatch = useDispatch();
  const [filterWord, setFilterWord] = useState("");
  const notes = useSelector((state) => state.note);
  
  const filterByHandler = (e) => {
    setFilterWord(e.target.value)

  }
  const filter = () => {
    if(filterWord.trim() === ""){
      return notes
    }
    return notes.filter(note => note.title.toLowerCase().includes(filterWord.toLowerCase()))
  }
   
  
  const filteredNotes = filter()


  
  return (
    <React.Fragment>
      <div className="row my-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="inputPassword6" style={{color: "white"}} className="col-form-label">
            Filter by: 
          </label>
        </div>
        <div className="col-auto">
          <input
          onChange={filterByHandler}
          value={filterWord}
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <ul>
        <div>
          {filteredNotes.map((note) => (
            <li
              className="item col-md-4  d-inline-block"
              key={note.id}
              style={{ backgroundColor: note.color }}
            >
            <button type="button" className="btn-close d-flex" onClick={() => dispatch(deleteNote(note.id))} aria-label="Close"></button>
              {note.title}
            </li>
          ))}
        </div>
      </ul>
    </React.Fragment>
  );
}

export default NoteList;
