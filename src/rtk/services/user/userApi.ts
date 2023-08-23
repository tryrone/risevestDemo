import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'utils/constants';
import {getBearerToken} from 'utils/localStorage';

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: async (headers: any) => {
      const token = await getBearerToken();

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
        url: '/users',
        method: 'POST',
        body: data,
      }),
    }),
    getUserSession: build.query({
      query: () => ({
        url: '/sessions',
        method: 'GET',
      }),
    }),

    getUserPlans: build.query({
      query: () => ({
        url: '/plans',
        method: 'GET',
      }),
    }),
    createPlan: build.mutation({
      query: data => ({
        url: '/plans',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useGetUserSessionQuery,
  useGetUserPlansQuery,
  useCreatePlanMutation,
} = userApi;
export default userApi;
