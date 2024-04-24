import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import "./app.css";
import { Container } from "react-bootstrap";

const App = () => {
	return (
		<div className="app">
			<Navigation />
			<Container className="pt-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Container>
		</div>
	);
};

export default App;
