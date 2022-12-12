import { createSlice } from "@reduxjs/toolkit";
import { IGetPeopleResponse, IPeople, IPeopleListItem } from "../../interfaces";
import reducers from "./reducer";

export interface CharactersState {
  loading: boolean;
  data: IGetPeopleResponse | null;
  characters: IPeople[] | null;
  characterTableList: IPeopleListItem[] | null;
  error: any;
}

const initialState: CharactersState = {
  loading: false,
  data: null,
  characters: null,
  characterTableList: null,
  error: null,
};

const characterListSlice = createSlice({
  name: "characterList",
  initialState,
  reducers,
});

// Action creators are generated for each case reducer function
export const {
  getCharacterList,
  getCharacterListSuccess,
  getCharacterListError,
} = characterListSlice.actions;

export default characterListSlice.reducer;
