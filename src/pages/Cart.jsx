import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MealCard from "./../components/MealCard";
import printCartItems from "./../utils/printCartItems";

const Cart = () => {
	const meals = useSelector((state) => state.cart);

	const totalPrice = meals.reduce((acc, meal) => {
		acc += meal.price * meal.amount;
		return acc;
	}, 0);

	const totalAmount = meals.reduce((acc, meal) => {
		acc += meal.amount;
		return acc;
	}, 0);

	return (
		<>
			<Row>
				{meals.length === 0 && <h1>Cart is Empty</h1>}

				{meals.length > 0 && (
					<>
						<h2>Total Price is : $ {totalPrice.toFixed(2)}</h2>
						<h2>Total Amount is : {totalAmount}</h2>
					</>
				)}
				{meals.map((meal) => {
					return (
						<Col key={meal.id}>
							<MealCard meal={meal} />
						</Col>
					);
				})}
			</Row>

			{meals.length > 0 && (
				<button
					className="btn btn-primary"
					onClick={() => printCartItems(meals, totalPrice.toFixed(2))}
				>
					Print
				</button>
			)}
		</>
	);
};

export default Cart;
