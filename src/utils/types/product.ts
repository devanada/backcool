export interface ProductType extends CardProductType {
  description: string;
  category: string;
}

export interface CardProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
