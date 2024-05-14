import { NavLink } from "react-router-dom";
import "../css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChair,
	faClockRotateLeft,
	faGear,
	faHouse,
	faNoteSticky,
	faReceipt,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
	return (
		<div
			className="d-flex flex-column p-4 gap-4 align-items-center justify-content-center z-1 bg-white "
			style={{
				overflow: "hidden",
				height: "100vh",
				width: "10rem",
			}}
		>
			<div className="regularClass">
				<div>
					<FontAwesomeIcon icon={faHouse} className="icon" />
				</div>
				<div>Home</div>
			</div>
			<NavLink
				to={"/"}
				className={({ isActive }) => {
					return isActive ? "activeClass" : "regularClass";
				}}
			>
				<div>
					<FontAwesomeIcon icon={faReceipt} className="icon" />
				</div>
				<div>Menu</div>
			</NavLink>
			<NavLink
				to={"/table"}
				className={({ isActive }) => {
					return isActive ? "activeClass" : "regularClass";
				}}
			>
				<FontAwesomeIcon icon={faChair} className="icon" />

				<div>Table</div>
			</NavLink>
			<div className="regularClass">
				<div>
					<FontAwesomeIcon icon={faClockRotateLeft} className="icon" />
				</div>
				<div>Order history</div>
			</div>
			<div className="regularClass">
				<div>
					<FontAwesomeIcon icon={faNoteSticky} className="icon" />
				</div>
				<div>Reports</div>
			</div>
			<div className="regularClass">
				<div>
					<FontAwesomeIcon icon={faGear} className="icon" />
				</div>
				<div>Settings</div>
			</div>
		</div>
	);
};

export default SideBar;
