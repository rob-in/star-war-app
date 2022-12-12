import { HTTPInstance } from "../core/HttpService";

export const getCharacterListEndpoint = async () => {
  return HTTPInstance.get(`people/?page=1`);
};
