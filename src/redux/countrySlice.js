// src/redux/countrySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  countries: [],
  error: null,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,flag"
      );
      console.log("API Response:", response); // Log response object
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("API Data:", data); // Log data
      return data;
    } catch (error) {
      console.error("Fetch error:", error); // Log error
      throw error;
    }
  }
);

// const countrySlice = createSlice({
//   name: "countries",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCountries.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCountries.fulfilled, (state, action) => {
//         state.loading = false;
//         state.countries = action.payload;
//       })
//       .addCase(fetchCountries.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });
const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload; // Make sure this is set correctly
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer as default
export default countrySlice.reducer;
