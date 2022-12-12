import { createSlice } from "@reduxjs/toolkit";
import { IFilm, IPeople } from "../../interfaces";
import reducers from "./reducer";

export interface CharacterDetailsState {
  character: IPeople | null;
  films: Array<IFilm> | null;
  loading: boolean;
  error: any;
}

export const initialState: CharacterDetailsState = {
  character: null,
  films: null,
  loading: false,
  error: null,
};

const characterDetailsSlice = createSlice({
  name: "character",
  initialState,
  reducers,
});

// Action creators are generated for each case reducer function
export const {
  setCharacterData,
  resetCharacterData,
  getCharacterDetails,
  getCharacterDetailsSuccess,
  getCharacterDetailsError,
  getFilmDetails,
  getFilmDetailsSuccess,
  getFilmDetailsError
} = characterDetailsSlice.actions;

export default characterDetailsSlice.reducer;
