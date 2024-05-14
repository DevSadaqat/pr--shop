import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

//DEV NOTE: Builder will have methods to make queries from backend
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductsById: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        keepUnusedDataFor: 5,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } =
  productsApiSlice;
