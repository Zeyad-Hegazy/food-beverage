import { useSelector } from "react-redux";

const Indicator = () => {
	const meals = useSelector((state) => state.cart);

	return (
		<span
			className="m-2 position-absolute"
			style={{
				top: "-20px",
				right: "-10px",
				height: "20px",
				width: "20px",
				borderRadius: "50%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "#f8f8f8",
				color: "black",
			}}
		>
			{meals.length}
		</span>
	);
};

export default Indicator;
