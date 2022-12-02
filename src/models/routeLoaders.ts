import { getCategory, getProducts, getStorage } from "../backend/Api";
import {
  CategoryInterface,
  ProductInterface,
  ProductLoaderInterface,
} from "./entities";

export const raktarLoader = async () => {
  const { data } = await getStorage();
  return data;
};
export const categoryLoader = async () => {
  const res = await getCategory();
  let catArray = [] as CategoryInterface[];
  (res.data as unknown as CategoryInterface[]).map((kat) => {
    catArray.push(kat);
  });

  return catArray;
};
export const productLoader = async () => {
  const res = await getProducts();
  let pd = [] as ProductInterface[];
  (res.data as unknown as ProductInterface[]).map((prod) => {
    pd.push(prod);
  });

  return {
    categories: categoryLoader(),
    products: pd,
  } as unknown as ProductLoaderInterface;
};
