import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // assuming you have a root reducer

const store = configureStore({
    reducer: rootReducer,
});

export default store;
