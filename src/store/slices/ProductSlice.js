import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		name: "Spaghetti Carbonara",
		description: "Creamy pasta with bacon and parmesan cheese",
		price: 12.99,
	},
	{
		id: 2,
		name: "Grilled Chicken Salad",
		description: "Fresh greens topped with grilled chicken breast",
		price: 9.99,
	},
	{
		id: 3,
		name: "Cheeseburger",
		description: "Classic beef burger with cheddar cheese",
		price: 8.49,
	},
];

const MealsSlice = createSlice({
	name: "Meals",
	initialState,
	reducers: {
		getAll: (state) => {
			return state;
		},
	},
});

export const { getAll } = MealsSlice.actions;
export default MealsSlice.reducer;
