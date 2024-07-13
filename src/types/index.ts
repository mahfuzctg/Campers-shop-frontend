/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/index.ts
import { Key } from "react";

export interface Product {
  id: Key | null | undefined;
  imageUrl: string | undefined;
  _id: string; // Using _id from backend
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[]; // Using images array from backend
  stockQuantity: number;
  ratings: number; // Renamed to match TProduct's `rating`
  tags: string[];
  stock: boolean; // Added to match TProduct
  __v: number; // Added to match TProduct
}
