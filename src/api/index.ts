import { axiosInstance } from "./axiosInstance";
import { Api } from "./Api";

export const api = new Api(axiosInstance);
