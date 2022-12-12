import { PayloadAction } from "@reduxjs/toolkit";
import { PlanetsState } from ".";
import { IPlanet } from "../../interfaces";

const reducers = {
  getPlanetDetails: (
    state: PlanetsState,
    { payload }: PayloadAction<{ id: string }>
  ) => {
    state.loading = true;
    return state;
  },
  getPlanetDetailsSuccess: (
    state: PlanetsState,
    { payload }: PayloadAction<{ id: string, data: IPlanet }>
  ) => {
    let dataObj = {
      [payload.id]: payload.data
    };
    state.loading = false;
    state.error = null;
    state.data = Object.assign(state.data || {}, dataObj);
  },
  getPlanetDetailsError: (
    state: PlanetsState,
    { payload }: PayloadAction<{ error: unknown }>
  ) => {
    state.loading = false;
    state.error = payload.error;
  },
};

export default reducers;
