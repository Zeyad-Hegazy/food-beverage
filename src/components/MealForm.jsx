/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMealForm } from "../store/slices/TableSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MealForm = ({ tableId }) => {
	const dispatch = useDispatch();

	const [meal, setMeal] = useState({
		name: "",
		description: "",
		price: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMeal((prevMeal) => ({
			...prevMeal,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Meal submitted:", meal);
		setMeal({
			name: "",
			description: "",
			price: "",
		});
		dispatch(toggleMealForm(tableId));
	};

	return (
		<div className="position-absolute bg-black p-4">
			<h3>Add New Meal</h3>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="mealName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter meal name"
						name="name"
						value={meal.name}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="mealDescription">
					<Form.Label>Description</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Enter meal description"
						name="description"
						value={meal.description}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="mealPrice">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter meal price"
						name="price"
						value={meal.price}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Add Meal
				</Button>
			</Form>
		</div>
	);
};

export default MealForm;
