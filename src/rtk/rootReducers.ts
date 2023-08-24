import {combineReducers} from 'redux';

import auth from 'rtk/services/auth/authSlice';

export default combineReducers({
  auth,
});
