import { configureStore } from "@reduxjs/toolkit";
import komenSlice from './komenSlice'

const store = configureStore({
  reducer: {
    komen: komenSlice,
  },
});

export default store;