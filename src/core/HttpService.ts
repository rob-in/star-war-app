import axios from "axios";
import { AppConstants } from "../constants";

let setupTokenHeaderRequestInterceptor: number;

export const HTTPInstance = axios.create({
  baseURL: AppConstants.baseAPIURL,
  timeout: 45000,
  headers: {
    // FUTURE: header variables will come here
  },
});

export function removePostLoginHeaders(): void {
  HTTPInstance.interceptors.request.eject(setupTokenHeaderRequestInterceptor);
}

init();

function init(): void {
  interceptErrors();
}

function interceptErrors(): void {
  HTTPInstance.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response?.data || null;
    },
    function (error) {
      // Do something with response error
      return Promise.reject(error);
    }
  );
}
