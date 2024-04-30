/* eslint-disable react/prop-types */
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import {
	decreaseAmount,
	increaseAmount,
	deleteFromCart,
} from "../store/slices/CartSlice";

const OrderCart = ({ meal }) => {
	const { id, name, price, amount } = meal;
	const dispatch = useDispatch();

	const handleDecrease = () => {
		dispatch(decreaseAmount({ id }));
	};

	const handleIncrease = () => {
		dispatch(increaseAmount({ id }));
	};

	const handleDelete = () => {
		dispatch(deleteFromCart({ id }));
	};

	return (
		<div
			style={{ background: "#f8f8f8" }}
			className="p-2 rounded-2 position-relative mt-4 mb-4"
		>
			<div className="d-flex justify-content-between align-content-center  pe-4">
				<p>{name}</p>
				<p>{price.toFixed(2)} LE</p>
			</div>
			<div
				className="position-absolute top-0 end-0 p-1 text-danger"
				style={{ cursor: "pointer" }}
				onClick={handleDelete}
			>
				<FontAwesomeIcon icon={faCircleXmark} />
			</div>
			<div>
				<input
					type="text"
					className="w-100 mb-2 border-0 p-1 rounded-2"
					placeholder="Notes"
					style={{ outline: "none" }}
				/>
			</div>
			<div className="actions mt-2 d-flex rounded-2">
				<div
					onClick={handleDecrease}
					className="text-center text-white ps-2 pe-2"
					style={{
						background: "#FF8500",
						borderTopLeftRadius: "5px",
						borderBottomLeftRadius: "5px",
						cursor: "pointer",
					}}
				>
					<FontAwesomeIcon icon={faMinus} />
				</div>
				<div
					className="text-center text-white ps-2 pe-2"
					style={{ background: "#FF8500" }}
				>
					{amount}
				</div>
				<div
					className="text-center text-white ps-2 pe-2"
					style={{
						background: "#FF8500",
						borderTopRightRadius: "5px",
						borderBottomRightRadius: "5px",
						cursor: "pointer",
					}}
					onClick={handleIncrease}
				>
					<FontAwesomeIcon icon={faPlus} />
				</div>
			</div>
		</div>
	);
};

export default OrderCart;
