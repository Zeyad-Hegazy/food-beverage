import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const exisitMeal = state.find((meal) => meal.id === action.payload.id);

			if (exisitMeal) {
				exisitMeal.amount += 1;
			} else {
				const mealClone = { ...action.payload, amount: 1 };
				state.push(mealClone);
			}
		},
		deleteFromCart: (state, action) => {
			return state.filter((meal) => meal.id !== action.payload.id);
		},

		increaseAmount: (state, action) => {
			const mealToIncrease = state.find(
				(meal) => meal.id === action.payload.id
			);
			if (mealToIncrease) {
				mealToIncrease.amount += 1;
			}
		},

		decreaseAmount: (state, action) => {
			const mealToIncrease = state.find(
				(meal) => meal.id === action.payload.id
			);
			if (mealToIncrease) {
				if (mealToIncrease.amount === 1) {
					return state.filter((meal) => meal.id !== action.payload.id);
				}
				mealToIncrease.amount -= 1;
			}
		},

		applyDiscount: (state, action) => {
			const discountPercentage = action.payload.discountPercentage;
			state.forEach((meal) => {
				meal.price *= (100 - discountPercentage) / 100;
			});
		},

		clear: () => {
			return [];
		},
	},
});

export const {
	addToCart,
	deleteFromCart,
	increaseAmount,
	decreaseAmount,
	applyDiscount,
	clear,
} = CartSlice.actions;

export default CartSlice.reducer;
