import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  getCharacterList,
  getCharacterListSuccess,
  getCharacterListError,
} from ".";
import {
  IGetPeopleResponse,
  IPeople,
  IPeopleListItem,
  IPlanet,
} from "../../interfaces";
import { getCharacterListEndpoint, getPlanetDetailsEndpoint } from "../../apis";
import { getIdFromURL } from "../../utils/getIdFromURL";
import { getPlanetDetailsSuccess } from "../planets";

// Worker saga will be fired on getCharacterList actions
function* getCharacterListGenerator() {
  try {
    const data: IGetPeopleResponse = yield call(getCharacterListEndpoint);
    const characters: IPeople[] = data?.results;

    // generating list of unique planets for the characterList
    const planets: string[] = [];
    characters.forEach((character: IPeople) => {
      if (planets.indexOf(character.homeworld) === -1) {
        planets.push(character.homeworld)
      }
    });

    // fetching data for homeplanet for all the characters
    const planetList: Array<IPlanet> = yield all(
      planets.map((_planet) =>
        call(getPlanetDetailsEndpoint, getIdFromURL(_planet))
      )
    );

    // formatting data for the characters table
    const characterTableList: IPeopleListItem[] = [];
    characters.forEach((character) => {
      const { name, gender, url } = character;
      const planet: IPlanet[] = planetList.filter((_planet: IPlanet) => _planet.url === character.homeworld);
      const homePlanet = planet[0]?.name || '';
      characterTableList.push({ name, gender, url, homePlanet });
    });

    // setting data for each planet into store, so that we need not to fetch it again
    yield all(
      planetList.map((_planet) =>
        put(
          getPlanetDetailsSuccess({
            id: getIdFromURL(_planet.url),
            data: _planet,
          })
        )
      )
    );

    yield put(
      getCharacterListSuccess({
        data: data,
        characterTableList: characterTableList || [],
      })
    );
  } catch (e) {
    yield put(getCharacterListError({ error: e }));
  }
}

export function* watchGetCharacterListAction() {
  yield takeLatest(getCharacterList, getCharacterListGenerator);
}
