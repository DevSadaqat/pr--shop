//DEV NOTE: This is a parent slice.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

//endpoints will allow us to handle try catch at one place
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Products', 'Order', 'User'],
  endpoints: (builder) => ({}),
});
