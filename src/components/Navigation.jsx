import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Indicator from "./Indicator";

const Navigation = () => {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<div>
					<Link to="/" className="navbar-brand">
						Menu
					</Link>
					<Link to="/cart" className="navbar-brand">
						Cart
						<Indicator />
					</Link>
					<Link to="/table" className="navbar-brand">
						Table
					</Link>
				</div>
			</Container>
		</Navbar>
	);
};

export default Navigation;
