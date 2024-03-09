import { configureStore } from "@reduxjs/toolkit";

import filesReducer from "../reducers/filesReducer";

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  // It called combineReducers to combine postsReducer and usersReducer into the root reducer function, which will handle a root state that looks like {files, users, etc}
  reducer: {
    files: filesReducer,
  },
});
