import { PayloadAction } from "@reduxjs/toolkit";
import { CharacterDetailsState, initialState } from ".";
import { IFilm, IPeople } from "../../interfaces";

const reducers = {
  setCharacterData: (
    state: CharacterDetailsState,
    { payload }: PayloadAction<{ data: IPeople }>
  ) => {
    state.character = payload.data;
  },
  resetCharacterData: () => {
    return initialState;
  },

  getCharacterDetails: (
    state: CharacterDetailsState,
    { payload }: PayloadAction<{ id: string }>
  ) => {
    state.loading = true;
    return state;
  },
  getCharacterDetailsSuccess: (
    state: CharacterDetailsState,
    { payload }: PayloadAction<{ data: IPeople, films: Array<IFilm>}>
  ) => {
    state.loading = false;
    state.character = payload?.data;
    state.films = payload?.films;
  },
  getCharacterDetailsError: (
    state: CharacterDetailsState,
    { payload }: PayloadAction<{ error: unknown }>
  ) => {
    state.loading = false;
    state.error = payload.error;
    state.character = null;
  },

  getFilmDetails: (
    state: CharacterDetailsState,
    { payload }: PayloadAction<{ films: string[] }>
  ) => {
    state.loading = true;
    return state;
  },
  getFilmDetailsSuccess: (
    state: CharacterDetailsState,
    { payload }: PayloadAction<{ films: IFilm[] }>
  ) => {
    state.loading = false;
    state.films = payload?.films;
  },
  getFilmDetailsError: (
    state: CharacterDetailsState,
    { payload }: PayloadAction<{ error: unknown }>
  ) => {
    state.loading = false;
    state.error = payload.error;
  },

};

export default reducers;
