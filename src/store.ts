import {configureStore} from '@reduxjs/toolkit'
import toastSlice from '../src/redux/reducers/toastReducer'

const store = configureStore({
    reducer:{
        //add reducers here
       toast:toastSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;