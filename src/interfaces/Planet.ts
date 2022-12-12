import { IFilm } from "./Film";
import { IPeople } from "./People";

export interface IPlanet {
  climate: string;
  created: string | Date;
  diameter: string;
  edited: string | Date;
  films: string[] | IFilm[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[] | IPeople[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}