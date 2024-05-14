import Navigation from "../components/Navigation";
import MealCard from "../components/MealCard";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

const Home = () => {
	const meals = useSelector((state) => state.meals);

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<div style={{ flex: "3" }}>
				<div className="w-100" style={{ height: "100%", overflowY: "auto" }}>
					<Navigation />
					<div className="me-4 ms-4 row pt-4 bg-white">
						{meals.map((meal) => (
							<div key={meal.id} className="col-md-3">
								<MealCard meal={meal} />
							</div>
						))}
					</div>
				</div>
			</div>

			<div
				style={{
					flex: "1",
					backgroundColor: "#fff",
					overflowY: "auto",
				}}
			>
				<Cart />
			</div>
		</div>
	);
};

export default Home;
