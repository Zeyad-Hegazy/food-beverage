import { NavLink } from "react-router-dom";
import "../css/sidebar.css";

const SideBar = () => {
	return (
		<div
			className="w-auto d-flex flex-column p-4 gap-4 align-items-center justify-content-center z-1 bg-white "
			style={{
				overflow: "hidden",
				height: "100vh",
			}}
		>
			<NavLink
				to={"/"}
				className={({ isActive }) => {
					return isActive ? "activeClass" : "regularClass";
				}}
			>
				<div>Menu</div>
			</NavLink>
			<NavLink
				to={"/table"}
				className={({ isActive }) => {
					return isActive ? "activeClass" : "regularClass";
				}}
			>
				<div>Table</div>
			</NavLink>
		</div>
	);
};

export default SideBar;
