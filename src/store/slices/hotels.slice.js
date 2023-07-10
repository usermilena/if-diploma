import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_STATE } from "../../constants/initialState";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: INITIAL_STATE.hotels,
  reducers: {
    setDestination: (state, action) => ({
      ...state,
      destination: action.payload,
    }),
    setDateFrom: (state, action) => ({ ...state, dateFrom: action.payload }),
    setDateTo: (state, action) => ({ ...state, dateTo: action.payload }),
    setAdults: (state, action) => ({ ...state, adults: action.payload }),
    setChildren: (state, action) => ({ ...state, children: action.payload }),
    setRooms: (state, action) => ({ ...state, rooms: action.payload }),
    setHotels: (state, action) => ({ ...state, hotels: action.payload }),
  },
});

export const {
  setDestination,
  setDateFrom,
  setDateTo,
  setAdults,
  setChildren,
  setRooms,
  setHotels,
} = hotelsSlice.actions;
export const hotelsReducer = hotelsSlice.reducer;
