import { call, put, takeLatest, all } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getCharacterDetailsSuccess,
  getCharacterDetailsError,
  getCharacterDetails,
  getFilmDetailsSuccess,
  getFilmDetailsError,
  getFilmDetails,
} from ".";
import { IFilm, IPeople } from "../../interfaces";
import { getPeopleDetailsEndpoint } from "../../apis";
import { getFilmDetailsEndpoint } from "../../apis/film";
import { getIdFromURL } from "../../utils/getIdFromURL";

// Worker saga will be fired on getCharacterDetails actions
export function* getCharacterDetailsGenerator(
  action: PayloadAction<{ id: string }>
) {
  try {
    const data: IPeople = yield call(
      getPeopleDetailsEndpoint,
      action.payload.id
    );

    // fetching data for all of the films
    const films: Array<IFilm> = yield all(
      data?.films?.map((_film) =>
        call(getFilmDetailsEndpoint, getIdFromURL(_film))
      )
    );

    yield put(getCharacterDetailsSuccess({ data: data, films: films }));
  } catch (e) {
    yield put(getCharacterDetailsError({ error: e }));
  }
}

export function* watchGetCharacterDetailsAction() {
  yield takeLatest(getCharacterDetails, getCharacterDetailsGenerator);
}

// -------------------------

// Worker saga will be fired on getFilmDetails actions
export function* getFilmDetailsGenerator(
  action: PayloadAction<{ films: string[] }>
) {
  try {
    const films: Array<IFilm> = yield all(
      action?.payload?.films?.map((_film) =>
        call(getFilmDetailsEndpoint, getIdFromURL(_film))
      )
    );

    yield put(getFilmDetailsSuccess({ films: films }));
  } catch (e) {
    yield put(getFilmDetailsError({ error: e }));
  }
}

export function* watchGetFilmDetailsAction() {
  yield takeLatest(getFilmDetails, getFilmDetailsGenerator);
}
