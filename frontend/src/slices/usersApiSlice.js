import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

//DEV NOTE: Builder will have methods to make queries from backend
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Using mutation as it is a POST request
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;
