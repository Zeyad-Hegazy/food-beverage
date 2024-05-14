/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { reserveTable } from "../store/slices/TableSlice";

const ReserveForm = ({ selectedTable, handleReserveClick }) => {
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formDataObject = Object.fromEntries(formData.entries());
		dispatch(reserveTable({ tabelNumber: selectedTable, ...formDataObject }));
		handleReserveClick(null);
	};

	return (
		<div className="w-100 p-3 rounded-2" style={{ background: "#f8f8f8" }}>
			<div>
				<span className="pe-4">Table Number</span>
				<span>#{selectedTable}</span>
			</div>

			<form className="d-flex flex-column" onSubmit={submitHandler}>
				<input
					type="text"
					className="w-100 rounded-4 border-0 p-2 my-2 mt-4"
					placeholder="Name"
					name="name"
					style={{ outline: "none", color: "black" }}
				/>
				<input
					type="text"
					className="w-100 rounded-4 border-0 p-2 my-2"
					placeholder="Number"
					name="number"
					style={{ outline: "none", color: "black" }}
				/>
				<input
					type="text"
					className="w-100 rounded-4 border-0 p-2 my-2"
					placeholder="Time"
					name="time"
					style={{ outline: "none", color: "black" }}
				/>
				<textarea
					type="text"
					className="w-100 rounded-4 border-0 p-2 my-2"
					placeholder="Order"
					name="order"
					style={{ outline: "none", color: "black", resize: "none" }}
				/>

				<div className="align-self-end d-flex gap-4 mt-4">
					<button
						className="px-3 py-2 px-lg-5 py-lg-2 border-0 rounded-2"
						style={{ background: "#EEEEEE" }}
						onClick={() => handleReserveClick(null)}
					>
						Cancel
					</button>
					<button
						type="submit"
						className="px-3 py-2 px-lg-5 py-lg-2 border-0 rounded-2 text-white"
						style={{ background: "#ff8500" }}
					>
						Done
					</button>
				</div>
			</form>
		</div>
	);
};

export default ReserveForm;
