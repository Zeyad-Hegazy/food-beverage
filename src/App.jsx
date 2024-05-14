import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TableComponent from "./pages/Table";
import "./app.css";
import SideBar from "./components/SideBar";

const App = () => {
	return (
		<div className="app bg d-flex">
			<SideBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/table" element={<TableComponent />} />
			</Routes>
		</div>
	);
};

export default App;
