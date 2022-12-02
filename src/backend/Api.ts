import axios from "axios";
import { CategoryInterface, ProductInterface } from "../models/entities";

axios.defaults.baseURL = "http://localhost:8080/api/";

//Product
export const getProducts = () => {
  return axios.get<Response>("products/");
};
export const postProduct = (prod: ProductInterface) => {
  return axios.post<Response>("products/", {
    name: prod.name,
    description: prod.description,
    price: prod.price,
  });
};
//Order
export const getOrders = () => {
  return axios.get<Response>("orders/");
};

//Storage
export const getStorage = () => {
  return axios.get<Response>("storage/");
};
//Category
export const getCategory = () => {
  return axios.get<Response>("category/");
};
export const createCategory = (category: string) => {
  return axios.post<Response>("category/", { name: category });
};
export const deleteCategory = (id: number) => {
  return axios.delete<Response>("category/" + id);
};
export const modifyCategory = (cat: CategoryInterface) => {
  return axios.put<Response>("category/" + cat.id, { name: cat.name });
};
