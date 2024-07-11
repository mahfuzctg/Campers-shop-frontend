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
  ratings: number;
  tags: string[];
}
