import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

const initialState = {
  authenticated: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginUserSuccess: (state: any, action: PayloadAction<any>) => {
      state.authenticated = true;
      state.token = action.payload;
    },

    logoutUser: (state: any) => {
      state.authenticated = false;
      state.token = null;
    },
  },
});

export const {loginUserSuccess, logoutUser} = authSlice.actions;

export const authentication = (state: RootState): any =>
  state.persistedReducer.auth;

export default authSlice.reducer;
