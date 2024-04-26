import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tables: [
		{
			id: 1,
			status: "available",
			meals: [],
			isMealFormOpen: false,
		},
	],
};

const tableSlice = createSlice({
	name: "tables",
	initialState,
	reducers: {
		addTable: (state) => {
			state.tables.push({
				id: state.tables.length + 1,
				status: "available",
				meals: [],
			});
		},
		assignMeals: (state, action) => {
			const { id, meals } = action.payload;
			const table = state.tables.find((table) => table.id === id);
			if (table) {
				table.meals.push(meals);
			}
		},
		setTableStatus: (state, action) => {
			const { id, status } = action.payload;
			const table = state.tables.find((table) => table.id === id);
			if (table) {
				table.status = status;
			}
		},
		toggleMealForm: (state, action) => {
			const table = state.tables.find(
				(table) => table.id === action.payload.id
			);
			if (table) {
				table.isMealFormOpen = !table.isMealFormOpen;
			}
		},
	},
});

export const { addTable, assignMeals, setTableStatus, toggleMealForm } =
	tableSlice.actions;
export default tableSlice.reducer;
