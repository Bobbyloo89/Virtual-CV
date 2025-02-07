

import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the theme slice
const initialState = {
  darkMode: true, // Default state: darkmode is enabled
};

// Slice for theme (darkmode) management
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Reducer function to toggle the dark mode
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode; // Toggle between true and false
    },
  },
});


export const { toggleTheme } = themeSlice.actions; // Export toggleTheme action, components can dispatch it to update darkmode state
export default themeSlice.reducer; // Export reducer to be used in store