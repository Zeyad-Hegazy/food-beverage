import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice";

const store = configureStore({
	reducer: {
		meals: ProductReducer,
	},
});

export default store;
