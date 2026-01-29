import { configureStore } from '@reduxjs/toolkit'
import adviceReducer from './adviceSlice';

const store = configureStore({
    reducer: {
        advice: adviceReducer
    }
});

export default store;