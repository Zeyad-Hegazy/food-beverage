/* eslint-disable react/prop-types */
import "../css/order.css";
import OrderCart from "../components/OrderCart";
import { useDispatch, useSelector } from "react-redux";

import { applyDiscount, clear } from "../store/slices/CartSlice";
import { useState } from "react";

const CartOrderStep = ({ cart }) => {
	return (
		<>
			<div className="line-2">
				<h5 className="mb-3">Order #123456</h5>
				<input
					type="text"
					className="w-100 rounded-4 border-0 p-2"
					placeholder="Customer Name"
					style={{ outline: "none", background: "#F8F8F8", color: "#C6C6C6" }}
				/>
				<input
					type="text"
					className="w-100 rounded-4 border-0 p-2 mt-2 mb-2"
					placeholder="Customer Number"
					style={{ outline: "none", background: "#F8F8F8", color: "#C6C6C6" }}
				/>
			</div>
			<div className="mt-5 mb-5">
				{cart.map((meal) => (
					<OrderCart key={meal.id} meal={meal} />
				))}
			</div>
		</>
	);
};

const CartPlaceStep = () => {
	return (
		<div>
			<h5 className="mb-3">Order #123456</h5>
			<div className="d-flex flex-column gap-3">
				<label className="custom-radio">
					<input name={"place"} type="radio" id="dine" value="dine" />
					<span className="checkmark"></span>
					<span className="checkmark-dot"></span>
					<span className="custom-radio-label" htmlFor="dine">
						Dine In
					</span>
				</label>
				<label className="custom-radio">
					<input name={"place"} type="radio" id="take-away" value="take-away" />
					<span className="checkmark"></span>
					<span className="checkmark-dot"></span>
					<span className="custom-radio-label" htmlFor="take-away">
						Take Away
					</span>
				</label>
				<label className="custom-radio">
					<input name={"place"} type="radio" id="delivery" value="delivery" />
					<span className="checkmark"></span>
					<span className="checkmark-dot"></span>
					<span className="custom-radio-label" htmlFor="delivery">
						Delivery
					</span>
				</label>
			</div>
		</div>
	);
};

const Cart = () => {
	const [step, setStep] = useState("order");
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const totalPrice = cart.reduce((acc, meal) => {
		acc += meal.price * meal.amount;
		return acc;
	}, 0);

	const handleDiscount = (value) => {
		dispatch(applyDiscount({ discountPercentage: value }));
	};

	const handleClear = () => dispatch(clear());

	return (
		<div className="h-100 p-4 pt-5 d-flex flex-column justify-content-between ">
			{step === "order" && <CartOrderStep cart={cart} />}
			{/* {step === "place" && <CartPlaceStep />} */}
			<div className="d-flex flex-column justify-content-center align-items-start gap-4 line">
				<div>Subtotal</div>
				<div className="w-100 d-flex justify-content-between align-content-center">
					<p>Add Discount</p>
					<input
						type="number"
						className="w-25 p-1 border-0 rounded-2"
						onChange={(e) => handleDiscount(e.target.value)}
						style={{ outline: "none", background: "#f8f8f8", color: "gray" }}
					/>
				</div>
				<div className="w-100 d-flex justify-content-between align-content-center">
					<p>Total</p>
					<p>{totalPrice.toFixed(2)}</p>
				</div>
				<div className="actions d-flex gap-1 w-100">
					<button
						onClick={handleClear}
						className="btn w-50"
						style={{ background: "#f8f8f8", color: "gray" }}
					>
						Cancel
					</button>
					<button
						className="btn w-50"
						style={{ background: "#FF8500", color: "white" }}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
