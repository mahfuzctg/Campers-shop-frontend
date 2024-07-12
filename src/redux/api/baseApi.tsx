import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),

    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/products/${data.id}`,
          method: "PUT",
          body: data.updatedData,
        };
      },
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    // payment
    addOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
    }),
    updateCartInfo: builder.mutation({
      query: (updatedProductData: object) => {
        return {
          url: `/products`,
          method: "PUT",
          body: updatedProductData,
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useAddOrderMutation,
  useUpdateCartInfoMutation,
} = baseApi;
