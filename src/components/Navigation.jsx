import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<div className="bg-white me-4 ms-4">
			<Navbar data-bs-theme="light" className="w-100">
				<input
					type="text"
					className="w-100 rounded-4 border-0 p-2 my-2 me-4 ms-4 mt-4"
					placeholder="Search"
					name="name"
					style={{ outline: "none", color: "black", background: "#F8F8F8" }}
				/>
			</Navbar>
			<div className="d-flex justify-content-between align-content-center mt-1 pb-2 me-4 ms-4 flex-wrap">
				<div>Breakfast</div>
				<div>Appetizres</div>
				<div
					className="rounded-2 text-white"
					style={{
						background: "#ff8500",
						paddingInline: "10px",
					}}
				>
					Main Dish
				</div>
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
