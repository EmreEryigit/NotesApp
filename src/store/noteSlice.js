import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: [
    {
      id: 1,
      title: "First note",
      color: "red",
    },
    {
        id: 2,
        title: "Çöpü Çıkart.",
        color: "gray",
      },
  ],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.splice(state.findIndex((note) => note.id === action.payload), 1);
    }
  },
});
export default noteSlice
export const { addNote, deleteNote } = noteSlice.actions;
