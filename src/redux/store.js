

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"; // Manages theme-related state (darkmode)


export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});