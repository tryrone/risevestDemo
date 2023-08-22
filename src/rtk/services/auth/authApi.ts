import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'utils/constants';
import {clearAsyncStorage} from 'utils/localStorage';
import * as RootNavigation from 'navigation/RootNavigation';
import {SIGN_IN} from 'navigation/constants';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
  }),
  reducerPath: 'authApi',
  endpoints: build => ({
    login: build.mutation({
      query: loginParams => {
        return {url: 'sessions', method: 'POST', body: loginParams};
      },
    }),
    logout: build.mutation({
      query: () => {
        clearAsyncStorage();
        RootNavigation?.navigationRef.current?.navigate(SIGN_IN);
        return {url: 'logout', method: 'GET'};
      },
    }),
  }),
});

export const {useLoginMutation, useLogoutMutation} = authApi;
export default authApi;
