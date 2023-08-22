import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'utils/constants';
import {getBearerToken} from 'utils/localStorage';

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/users`,
    prepareHeaders: (headers: any) => {
      const token = getBearerToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  reducerPath: 'userApi',
  endpoints: build => ({
    signUpUser: build.mutation({
      query: data => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {useSignUpUserMutation} = userApi;
export default userApi;
