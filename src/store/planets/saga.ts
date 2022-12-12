import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getPlanetDetails,
  getPlanetDetailsSuccess,
  getPlanetDetailsError,
} from ".";
import { IPlanet } from "../../interfaces";
import { getPlanetDetailsEndpoint } from "../../apis";

// Worker saga will be fired on getPlanetDetails actions
export function* getPlanetDetailsGenerator(action: PayloadAction<{ id: string }>) {
  try {
    const data: IPlanet = yield call(
      getPlanetDetailsEndpoint,
      action.payload.id
    );
    yield put(getPlanetDetailsSuccess({id: action.payload.id, data: data}));
  } catch (e) {
    yield put(getPlanetDetailsError({ error: e }));
  }
}

export function* watchGetPlanetDetailsAction() {
  yield takeLatest(getPlanetDetails, getPlanetDetailsGenerator);
}
