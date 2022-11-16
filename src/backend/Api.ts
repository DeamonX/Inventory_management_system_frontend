import axios from "axios";
import { createCategoryInterface } from "../models/entities";

axios.defaults.baseURL = "http://localhost:8080/api/";

export const getProducts = () => {
  return axios.get<Response>("products/");
};
export const getOrders = () => {
  return axios.get<Response>("orders/");
};
export const getStorage = () => {
  return axios.get<Response>("storage/");
};
export const getAllCategory = () => {
  return axios.get<Response>("category/");
};
export const createCategory = (category: createCategoryInterface) => {
  return axios.post<Response>("category/", { name: category.name });
};
