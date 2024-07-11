import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Product {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  ratings: number;
  images: string[];
  tags?: string[];
}

interface ProductsState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

// Thunks
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters: any) => {
    const response = await axios.get("/api/products", { params: filters });
    return response.data.data;
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id: string) => {
    const response = await axios.get(`/api/products/${id}`);
    return response.data.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch products";
        state.loading = false;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch product";
        state.loading = false;
      });
  },
});

export const { clearFilters } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductById = (state: RootState, id: string) =>
  state.products.products.find((product) => product._id === id);

export default productsSlice.reducer;
