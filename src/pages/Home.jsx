import Navigation from "../components/Navigation";
import MealCard from "../components/MealCard";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faClose } from "@fortawesome/free-solid-svg-icons";
import Indicator from "./../components/Indicator";

const Home = () => {
	const meals = useSelector((state) => state.meals);
	const [cartVisible, setCartVisible] = useState(true);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 1110);
			if (window.innerWidth <= 1110) {
				setCartVisible(false);
			} else {
				setCartVisible(true);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleCartVisibility = () => {
		setCartVisible((prevVisible) => !prevVisible);
	};

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
					width: cartVisible ? (isSmallScreen ? "100vw" : "100%") : "0",
					height: cartVisible ? (isSmallScreen ? "100vh" : "100%") : "0",
					display: cartVisible ? "block" : "none",
					position: cartVisible ? isSmallScreen && "absolute" : "initial",
					top: "0",
					right: "0",
					zIndex: "999",
				}}
			>
				<Cart />
			</div>
			<div className="position-relative">
				<button
					className="px-3 py-2 border-0 rounded-2"
					style={{
						position: "fixed",
						top: "20px",
						right: "20px",
						zIndex: "999",
						background: "#ff8500",
						color: "white",
					}}
					onClick={toggleCartVisibility}
				>
					{cartVisible ? (
						<FontAwesomeIcon icon={faClose} />
					) : (
						<FontAwesomeIcon icon={faCartArrowDown} />
					)}
					{!cartVisible && <Indicator />}
				</button>
			</div>
		</div>
	);
};

export default Home;
