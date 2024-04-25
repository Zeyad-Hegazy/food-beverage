import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "./../components/MealCard";
import printCartItems from "./../utils/printCartItems";
import { clear, applyDiscount } from "../store/slices/CartSlice";

const Cart = () => {
	const meals = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const totalPrice = meals.reduce((acc, meal) => {
		acc += meal.price * meal.amount;
		return acc;
	}, 0);

	const totalAmount = meals.reduce((acc, meal) => {
		acc += meal.amount;
		return acc;
	}, 0);

	const clearHandler = () => {
		dispatch(clear());
	};

	const discountHandler = () => {
		dispatch(applyDiscount({ discountPercentage: 20 }));
	};

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
					const originalPrice = meal.price * meal.amount;
					const discountedPrice = (meal.price * meal.amount * 80) / 100;
					return (
						<Col key={meal.id}>
							<MealCard meal={meal} />
							<p>Old Price: $ {originalPrice.toFixed(2)}</p>
							<p>
								New Price (After 20% Discount): $ {discountedPrice.toFixed(2)}
							</p>
						</Col>
					);
				})}
			</Row>

			{meals.length > 0 && (
				<>
					<button className="btn btn-success m-2" onClick={discountHandler}>
						Apply Discount (20% Off)
					</button>
					<button
						className="btn btn-primary"
						onClick={() => printCartItems(meals, totalPrice.toFixed(2))}
					>
						Print
					</button>
					<button className="btn btn-danger m-2" onClick={clearHandler}>
						Clear
					</button>
				</>
			)}
		</>
	);
};

export default Cart;
