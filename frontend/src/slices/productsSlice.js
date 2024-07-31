import { PRODUCTS_URL, FILE_UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

//DEV NOTE: Builder will have methods to make queries from backend
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      providesTags: ['Products'],
      keepUnusedDataFor: 5,
    }),
    getProductsById: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        keepUnusedDataFor: 5,
      }),
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
        //DEV NOTE: Invalidate tags to clear the cache of the products
        invalidatesTags: ['Products'],
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ data, productId }) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'PUT',
        body: { ...data },
        invalidatesTags: ['Products'],
      }),
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: FILE_UPLOAD_URL,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
} = productsApiSlice;
