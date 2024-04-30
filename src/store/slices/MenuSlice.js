import { createSlice } from "@reduxjs/toolkit";
import imag1 from "../../assets/Rectangle23.png";
import imag2 from "../../assets/Rectangle23-1.png";
import imag3 from "../../assets/Rectangle23-2.png";
import imag4 from "../../assets/Rectangle23-3.png";

const initialState = [
	{
		tableId: 1,
		id: 1,
		name: "Spaghetti Carbonara",
		description: "Creamy pasta with bacon and parmesan cheese",
		price: 12.99,
		image: imag1,
	},
	{
		tableId: 1,
		id: 2,
		name: "Grilled Chicken Salad",
		description: "Fresh greens topped with grilled chicken breast",
		price: 9.99,
		image: imag2,
	},
	{
		tableId: 1,
		id: 3,
		name: "Cheeseburger",
		description: "Classic beef burger with cheddar cheese",
		price: 8.49,
		image: imag3,
	},
	{
		tableId: 1,
		id: 4,
		name: "Cheeseburger",
		description: "Classic beef burger with cheddar cheese",
		price: 8.49,
		image: imag4,
	},
	{
		tableId: 1,
		id: 5,
		name: "Cheeseburger",
		description: "Classic beef burger with cheddar cheese",
		price: 8.49,
		image: imag1,
	},
	{
		tableId: 1,
		id: 6,
		name: "Cheeseburger",
		description: "Classic beef burger with cheddar cheese",
		price: 8.49,
		image: imag2,
	},
	{
		tableId: 1,
		id: 7,
		name: "Cheeseburger",
		description: "Classic beef burger with cheddar cheese",
		price: 8.49,
		image: imag3,
	},
	{
		tableId: 1,
		id: 8,
		name: "Cheeseburger",
		description: "Classic beef burger with cheddar cheese",
		price: 8.49,
		image: imag3,
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
