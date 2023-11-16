import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import toastReducer from '../src/redux/reducers/toastReducer';
import RefreshTokenApi from 'redux/api/RefreshTokenApi';
// import {RefreshApi} from 'redux/api/RefreshTokenApi';


const rootReducer = combineReducers({
  // Add all reducers here
  toast: toastReducer,
  tokenRefresh:RefreshTokenApi
//   [RefreshApi.reducePath]: RefreshApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(RefreshApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;

