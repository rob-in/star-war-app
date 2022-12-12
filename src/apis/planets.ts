import { HTTPInstance } from "../core/HttpService";

export const getPlanetDetailsEndpoint = async (id: string) => {
  return HTTPInstance.get(`planets/${id}`);
};
