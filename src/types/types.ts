import { Key } from "react";

export interface Product {
  _id: Key | string;
  name: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  image: string; // Adjust if the type is different (string or URL)
  id: string; // If applicable, otherwise remove this if it's redundant
  imageUrl?: string;
  rating: number; // Ensure this property is included
}
