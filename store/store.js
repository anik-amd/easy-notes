import { configureStore } from "@reduxjs/toolkit";
// import notesReducer from "./notesSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import notesSlice from "./notesSlice";

const persistConfig = {
  key: "notes",
  storage,
};

const reducers = combineReducers({ notes: notesSlice });
const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//   reducer: {
//     notes: notesReducer,
//   },
// });

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
