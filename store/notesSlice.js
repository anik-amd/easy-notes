import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    // setNotes: (state) => {},
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action) => {},
    deleteNote: (state, action) => {},
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
