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

    getPlanById: build.query({
      query: id => ({
        url: `/plans/${id}`,
        method: 'GET',
      }),
    }),

    getConversionRates: build.query({
      query: () => ({
        url: '/rates',
        method: 'GET',
      }),
    }),
    getQuotes: build.query({
      query: () => ({
        url: '/quotes',
        method: 'GET',
      }),
    }),
    getBanks: build.query({
      query: () => ({
        url: '/banks',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useGetUserSessionQuery,
  useGetUserPlansQuery,
  useCreatePlanMutation,
  useGetPlanByIdQuery,
  useGetConversionRatesQuery,
  useGetQuotesQuery,
  useGetBanksQuery,
} = userApi;
export default userApi;
