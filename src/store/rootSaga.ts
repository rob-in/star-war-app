import { all } from "redux-saga/effects";
import {
  watchGetCharacterDetailsAction,
  watchGetFilmDetailsAction,
} from "./characterDetails/saga";
import { watchGetCharacterListAction } from "./characterList/saga";
import { watchGetPlanetDetailsAction } from "./planets/saga";

export default function* rootSaga() {
  yield all([
    watchGetCharacterListAction(),
    watchGetPlanetDetailsAction(),
    watchGetCharacterDetailsAction(),
    watchGetFilmDetailsAction(),
  ]);
}
