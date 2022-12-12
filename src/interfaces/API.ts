import { IPeople } from "./People";

export interface IGetPeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: IPeople[];
}
