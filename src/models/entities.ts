export interface StorageInterface {
  product: [ProductInterface, number];
}

export interface ProductInterface {
  id?: number;
  name: string;
  description: string;
  price: number;
  thumbnail?: string;
  productCategories?: [
    {
      id: number;
      name: string;
    }
  ];
  rerender?: () => void;
}

export interface createCategoryInterface {
  id?: number;
  name: string;
}

export interface CategoryInterface {
  id: number;
  name: string;
  rerender?: () => void;
}
export interface ProductLoaderInterface {
  categories: CategoryInterface[];
  products: ProductInterface[];
}
