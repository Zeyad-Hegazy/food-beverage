import { useSelector } from "react-redux";
import MealCard from "../components/MealCard";
import { Col, Row } from "react-bootstrap";

const Home = () => {
	const meals = useSelector((state) => state.meals);

	return (
		<div>
			<Row>
				{meals.map((meal) => {
					return (
						<Col key={meal.id}>
							<MealCard meal={meal} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Home;
