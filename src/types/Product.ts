import { Key } from "readline";

export interface Product {
  id: Key | null | undefined;
  imageUrl: string | undefined;
  _id: string; // Using _id from backend
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stockQuantity: number;
  ratings: number;
  tags: string[];

  quantity: number;
  rating: number;
  stock: boolean;
  __v: number;
}
