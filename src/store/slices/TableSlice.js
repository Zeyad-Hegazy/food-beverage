import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		tabelNumber: 1,
		state: "empty",
		name: "",
		number: "",
		time: "",
		order: "",
	},
	{
		tabelNumber: 2,
		state: "empty",
		name: "",
		number: "",
		time: "",
		order: "",
	},
	{
		tabelNumber: 3,
		state: "empty",
		name: "",
		number: "",
		time: "",
		order: "",
	},
	{
		tabelNumber: 4,
		state: "empty",
		name: "",
		number: "",
		time: "",
		order: "",
	},
];

const tableSlice = createSlice({
	name: "Table",
	initialState,
	reducers: {
		reserveTable: (state, action) => {
			const { tabelNumber, name, number, time, order } = action.payload;
			console.log(action.payload);
			const table = state.find((s) => s.tabelNumber === tabelNumber);
			console.log(table);
			if (table) {
				table.state = "reserved";
				table.name = name;
				table.number = number;
				table.time = time;
				table.order = order;
			}
		},
	},
});

export const { reserveTable } = tableSlice.actions;

export default tableSlice.reducer;
