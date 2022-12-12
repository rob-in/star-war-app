import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducer";

export interface PlanetsState {
  loading: boolean;
  data: any;
  error: any;
}

const initialState: PlanetsState = {
  loading: false,
  data: null,
  error: null,
};

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers,
});

// Action creators are generated for each case reducer function
export const {
  getPlanetDetails,
  getPlanetDetailsSuccess,
  getPlanetDetailsError,
} = planetsSlice.actions;

export default planetsSlice.reducer;
