import { HTTPInstance } from "../core/HttpService";

export const getPeopleDetailsEndpoint = async (id: string) => {
  return HTTPInstance.get(`people/${id}`);
};
