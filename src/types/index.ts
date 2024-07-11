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
  productId: string;
  name: string;
  price: number;
  quantity: number;
  stockQuantity: number;
}
