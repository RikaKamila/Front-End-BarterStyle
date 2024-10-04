import { createSlice } from "@reduxjs/toolkit";

const komenSlice = createSlice({
  name: "komen",
  initialState: {
    komens: [],
  },

  reducers: {
    addKomen: (state, action) => {
        state.komens.push(action.payload);
    }

  }

});


export const { addKomen} = komenSlice.actions;
export default komenSlice.reducer;