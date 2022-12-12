import { PayloadAction } from "@reduxjs/toolkit";
import { CharactersState } from ".";
import { IGetPeopleResponse, IPeople, IPeopleListItem } from "../../interfaces";

const reducers = {
  getCharacterList: (state: CharactersState) => {
    state.loading = true;
    return state;
  },
  getCharacterListSuccess: (
    state: CharactersState,
    { payload }: PayloadAction<{ data: IGetPeopleResponse, characterTableList: IPeopleListItem[] }>
  ) => {
    state.loading = false;
    state.data = payload?.data;
    state.characters = payload?.data?.results;
    state.characterTableList = payload?.characterTableList;
  },
  getCharacterListError: (
    state: CharactersState,
    { payload }: PayloadAction<{ error: unknown }>
  ) => {
    state.loading = false;
    state.error = payload.error;
  },
};

export default reducers;
