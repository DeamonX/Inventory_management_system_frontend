import axios from "axios";
import { createCategoryInterface } from "../models/entities";

const getReq = (uri: string) => {
  return axios.get<Response>("http://localhost:8080/api/" + uri);
};

export const getProducts = () => {
  return getReq("products/");
};
export const getOrders = () => {
  return getReq("orders/");
};
export const getStorage = () => {
  return getReq("storage/");
};
export const getAllCategory = () => {
  return getReq("category/");
};
export const createCategory = (category: createCategoryInterface) => {
  return axios.post<Response>("http://localhost:8080/api/category", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(category.name),
  });
};
