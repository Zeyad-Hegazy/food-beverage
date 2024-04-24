import { Card, Button } from "react-bootstrap";

const MealCard = ({ title, description, imageUrl, price }) => {
	return (
		<Card style={{ width: "18rem" }} className="mb-4">
			<Card.Img variant="top" src={imageUrl} alt={title} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>Price: ${price}</Card.Text>
				<Button variant="primary">Add to Cart</Button>
			</Card.Body>
		</Card>
	);
};

export default MealCard;
