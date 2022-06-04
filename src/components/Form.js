import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../store/noteSlice";
function Form() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, color }));
    setTitle("");
    setColor("white");
  };
  return (
    <div className="col-md-12">
           <form onSubmit={submitHandler}>
      <div className="form-floating">
        <textarea
        id="textarea"
        
          className="form-control  border-5"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          
          
        ></textarea>
        
      </div>
      <div style={{backgroundColor: "white"}}>
      <button style={{width: "5rem", height: "2rem"}} 
        type="button"
        onClick={() => setColor("blue")}
        className="btn btn-primary mx-1"
      ></button>
      <button style={{width: "5rem", height: "2rem"}} 
        type="button"
        onClick={() => setColor("red")}
        className="btn btn-danger mx-1"
      ></button>

      <button style={{width: "5rem", height: "2rem"}} 
        type="button"
        onClick={() => setColor("green")}
        className="btn btn-success mx-1"
      ></button>
      <button style={{width: "5rem", height: "2rem"}} 
        type="button"
        onClick={() => setColor("yellow")}
        className="btn btn-warning mx-1"
      ></button>
      <button style={{width: "5rem", height: "2rem"}} 
        type="button"
        onClick={() => setColor("turquoise  ")}
        className="btn btn-info mx-1"
      ></button>
      <button style={{width: "5rem", height: "2rem"}} 
        type="button"
        onClick={() => setColor("gray")}
        className="btn btn-secondary mx-1"
      ></button>
      
      <button className="btn btn-info submit " id="addnoteBtn"  type="submit">
        Add Note
      </button>
     
      
      </div>
    </form>
    </div>
  );
}

export default Form;
