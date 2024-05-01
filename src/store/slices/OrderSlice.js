import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	coustumerName: null,
	coustumerNumber: null,
	orderCart: [],
	totalPrice: 0,
	place: null,
};

const addAdditionalProperties = (state, place) => {
	let updatedState = { ...state }; // Create a copy of the initial state

	if (place === "Dine in") {
		updatedState.tableNumber = null; // Add table number property
	} else if (place === "Delivery") {
		updatedState.streetNumber = null; // Add street number property
		updatedState.building = null; // Add building property
		updatedState.apartmentNumber = null; // Add apartment number property
	} else {
		// Handle other cases or invalid place
		console.error("Invalid place specified");
	}
	updatedState.place = place;
	updatedState.paymentMethod = null;

	return updatedState;
};

const OrderSlice = createSlice({
	initialState,
	reducers: {
		setPlace: (state, action) => {},
	},
});
