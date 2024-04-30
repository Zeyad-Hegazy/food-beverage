import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<div className="bg-white me-4 ms-4">
			<Navbar data-bs-theme="light" className="w-100">
				<input type="search" className="w-100 me-4 ms-4 mt-4" />
			</Navbar>
			<div className="d-flex justify-content-between align-content-center mt-1 pb-2 me-4 ms-4">
				<div>Breakfast</div>
				<div>Appetizres</div>
				<div>Main Dish</div>
				<div>Dinner</div>
				<div>Extra</div>
				<div>Deserts</div>
				<div>Beverages</div>
				<div>Extra</div>
			</div>
		</div>
	);
};

export default Navigation;
