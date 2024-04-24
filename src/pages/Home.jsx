import { useSelector } from "react-redux";
import MealCard from "../components/MealCard";
import { Col, Row } from "react-bootstrap";

const Home = () => {
	const meals = useSelector((state) => state.meals);

	console.log(meals.meals);

	return (
		<div>
			<Row>
				{meals.meals.map((meal) => {
					return (
						<Col key={meal.id}>
							<MealCard
								title={meal.name}
								description={meal.description}
								price={meal.price}
							/>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Home;
