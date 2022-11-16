import { getAllCategory, getStorage } from "../backend/Api";
import { CategoryInterface } from "../models/entities";

export const raktarLoader = async () => {
  const { data } = await getStorage();
  return data;
};
export const categoryLoader = async () => {
  const res = await getAllCategory();
  let catArray = [] as CategoryInterface[];
  (res.data as unknown as CategoryInterface[]).map((kat) => {
    catArray.push(kat);
  });

  return catArray;
};
