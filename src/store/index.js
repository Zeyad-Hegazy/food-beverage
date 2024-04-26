import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice";
import CartReducer from "./slices/CartSlice";
import TableReducer from "./slices/TableSlice";

const store = configureStore({
	reducer: {
		meals: ProductReducer,
		cart: CartReducer,
		table: TableReducer,
	},
});

export default store;
