import { IPeople } from "./People";
import { IPlanet } from "./Planet";
import { ISpecie } from "./Specie";
import { IStarship } from "./Starship";
import { IVehicle } from "./Vehicle";

export interface IFilm {
  characters: string[] | IPeople[];
  created: string | Date;
  director: string;
  edited: string | Date;
  episode_id: number;
  opening_crawl: string;
  planets: string[] | IPlanet[];
  producer: string;
  release_date: string | Date;
  species: string[] | ISpecie[];
  starships: string[] | IStarship[];
  title: string;
  url: string;
  vehicles: string[] | IVehicle[];
}
