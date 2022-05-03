import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
    },
    updateNote: (state, action) => {
      console.log(action.payload);
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
      const note = action.payload;
      state.notes.unshift(note);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
