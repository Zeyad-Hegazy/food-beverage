/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/CartSlice";

const MealCard = ({ meal }) => {
	const { id, image, name, price } = meal;
	const dispatch = useDispatch();

	return (
		<Card
			style={{ textAlign: "center", background: "#f8f8f8" }}
			className="mb-4 d-flex  justify-content-center align-items-center flex-column border-0"
		>
			<div>
				<Card.Img variant="top" src={image} alt={name} className="w-100" />
			</div>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text className="fw-medium">{price.toFixed(2)} LE</Card.Text>

				<Button
					style={{ background: "#FF8500", border: "#FF8500" }}
					onClick={() => dispatch(addToCart(meal))}
				>
					Add to Order
				</Button>
			</Card.Body>
		</Card>
	);
};

export default MealCard;
