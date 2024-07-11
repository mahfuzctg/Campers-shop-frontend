// src/redux/slices/productsSlice.ts

import { Product } from "@/types/Product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductsState {
  items: any;
  products: Product[];
  filteredProducts: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchTerm: string;
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
  sortBy: "asc" | "desc";
}

// Initial state
const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  status: "idle",
  error: null,
  searchTerm: "",
  selectedCategory: "",
  minPrice: 0,
  maxPrice: 1000,
  sortBy: "asc",
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>(
      "http://localhost:5000/api/products"
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredProducts = applyFilters(state);
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
      state.filteredProducts = applyFilters(state);
    },
    setPriceRange(state, action) {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
      state.filteredProducts = applyFilters(state);
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
      state.filteredProducts = applyFilters(state);
    },
    clearFilters(state) {
      state.searchTerm = "";
      state.selectedCategory = "";
      state.minPrice = 0;
      state.maxPrice = 1000;
      state.sortBy = "asc";
      state.filteredProducts = applyFilters(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredProducts = applyFilters(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const applyFilters = (state: ProductsState) => {
  return state.products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
        (state.selectedCategory
          ? product.category === state.selectedCategory
          : true) &&
        product.price >= state.minPrice &&
        product.price <= state.maxPrice
    )
    .sort((a, b) =>
      state.sortBy === "asc" ? a.price - b.price : b.price - a.price
    );
};

export const {
  setSearchTerm,
  setCategory,
  setPriceRange,
  setSortBy,
  clearFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
