export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stockQuantity: number;
  images: string[];
}

export interface ICartItem {
  _id: string | undefined;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  stockQuantity: number;
}
