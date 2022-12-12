import { IFilm } from "./Film";
import { IPeople } from "./People";

export interface IVehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[] | IPeople[];
  films: string[] | IFilm[];
  url: string;
  vehicle_class: string;
}
