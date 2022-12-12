import { HTTPInstance } from "../core/HttpService";

export const getFilmDetailsEndpoint = async (id: string) => {
  return HTTPInstance.get(`films/${id}`);
};
