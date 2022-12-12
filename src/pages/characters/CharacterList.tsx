import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled as muiStyled } from "@mui/material";

import { CharacterListTable, PageHeader } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MainContentLayout } from "../../layouts";
import { IPeople, IPeopleListItem } from "../../interfaces";
import { getCharacterList } from "../../store/characterList";
import { getIdFromURL } from "../../utils/getIdFromURL";
import { setCharacterData } from "../../store/characterDetails";
import AppLoader from "../../components/AppLoader";

export const CharacterList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { characters } = useAppSelector((state) => state.characters);
  const { characterTableList, loading } = useAppSelector(
    (state) => state.characters
  );

  const fetchData = useCallback(() => {
    dispatch(getCharacterList());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleRowClick(character: IPeopleListItem): void {
    const customerId = getIdFromURL(character?.url);
    setCurrentCharacterToStore(character);
    navigate(`/character/${customerId}`);
  }

  function setCurrentCharacterToStore(character: IPeopleListItem): void {
    characters?.forEach((_character: IPeople) => {
      if (character.url === _character?.url) {
        dispatch(setCharacterData({ data: _character }));
      }
    });
  }

  const characterListContent = () => {
    if (loading) {
      return <AppLoader></AppLoader>;
    } else {
      return (
        <CharacterListTable
          characterList={characterTableList}
          onRowClicked={handleRowClick}
        ></CharacterListTable>
      );
    }
  };

  return (
    <MainContentLayout>
      <PageHeader title="Characters" />
      <CharacterListContent>{characterListContent()}</CharacterListContent>
    </MainContentLayout>
  );
};

const CharacterListContent = muiStyled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 300,
});
