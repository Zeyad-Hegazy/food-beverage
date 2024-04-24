/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
	addToCart,
	deleteFromCart,
	increaseAmount,
	decreaseAmount,
} from "../store/slices/CartSlice";
import { useLocation } from "react-router-dom";

const MealCard = ({ meal }) => {
	const { id, title, description, imageUrl, price, amount } = meal;
	const dispatch = useDispatch();

	const location = useLocation();

	const handleDecrease = () => {
		dispatch(decreaseAmount({ id }));
	};

	const handleIncrease = () => {
		dispatch(increaseAmount({ id }));
	};

	return (
		<Card style={{ width: "18rem" }} className="mb-4">
			<Card.Img variant="top" src={imageUrl} alt={title} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>Price: ${price}</Card.Text>
				{location.pathname === "/cart" && (
					<div className="d-flex">
						<button className="p-2" onClick={handleDecrease}>
							-
						</button>
						<Card.Text>Amount: {amount}</Card.Text>
						<button className="p-2" onClick={handleIncrease}>
							+
						</button>
					</div>
				)}

				{location.pathname === "/" && (
					<Button variant="primary" onClick={() => dispatch(addToCart(meal))}>
						Add to Cart
					</Button>
				)}
				{location.pathname === "/cart" && (
					<Button
						variant="danger"
						onClick={() => dispatch(deleteFromCart(meal))}
					>
						Remove
					</Button>
				)}
			</Card.Body>
		</Card>
	);
};

export default MealCard;
