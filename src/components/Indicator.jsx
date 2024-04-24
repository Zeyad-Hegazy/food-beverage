import { useSelector } from "react-redux";

const Indicator = () => {
	const meals = useSelector((state) => state.meals.meals);

	return <span className="bg-danger rounded p-1">{meals.length}</span>;
};

export default Indicator;
