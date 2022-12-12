import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  PageHeader,
  AccountProfile,
  Movies,
  PlanetDetails,
} from "../../components";
import { IPeople, IPlanet } from "../../interfaces";
import { MainContentLayout } from "../../layouts";
import {
  getCharacterDetails,
  getFilmDetails,
  resetCharacterData,
} from "../../store/characterDetails";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPlanetDetails } from "../../store/planets";
import { getIdFromURL } from "../../utils/getIdFromURL";

export const CharacterDetails = () => {
  const routeParams = useParams();
  const dispatch = useAppDispatch();
  const { id } = routeParams;

  const { characters } = useAppSelector((state) => state.characters);

  const { character, films, loading } = useAppSelector(
    (state) => state.characterDetails
  );

  const planets: any = useAppSelector((state) => state.planets.data);

  const [characterObj, setCharacterObj] = useState<IPeople | null>(null);
  const [planetObj, setPlanetObj] = useState<IPlanet | null>(null);

  // TODO: useCallback hook

  useEffect(() => {
    if (!characters && id) {
      dispatch(getCharacterDetails({ id: id }));
    }
    return () => {
      dispatch(resetCharacterData());
    };
  }, [id, dispatch, characters]);

  useEffect(() => {
    if (character) {
      setCharacterObj(character);

      if (character?.films && !films) {
        dispatch(getFilmDetails({ films: character?.films }));
      }
    }
  }, [dispatch, character, films]);

  useEffect(() => {
    if (characterObj) {
      const planetId = getIdFromURL(characterObj.homeworld);
      if (planets && planets[planetId]) {
        setPlanetObj(planets[planetId]);
      } else {
        dispatch(getPlanetDetails({ id: planetId }));
      }
    }
  }, [dispatch, planets, characterObj]);

  return (
    <MainContentLayout>
      <PageHeader title="Character Details" />
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <AccountProfile
            name={characterObj?.name}
            gender={characterObj?.gender}
            haircolor={characterObj?.hair_color}
            eyecolor={characterObj?.eye_color}
            loading={loading}
          />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <PlanetDetails
            planet={planetObj}
            style={{ marginBottom: "16px" }}
            loading={loading}
          ></PlanetDetails>
          <Movies data={films} loading={loading}></Movies>
        </Grid>
      </Grid>
    </MainContentLayout>
  );
};
