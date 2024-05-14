/* eslint-disable react/prop-types */
import { useState } from "react";

const ReservedTable = ({ name, tabelNumber, order, time, number }) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<div
			className="d-flex justify-content-between align-items-center p-2 rounded-4"
			style={{ background: "#f8f8f8" }}
		>
			<div className="d-grid w-25">
				{!showDetails && (
					<div className="text-center">
						<div className="row">
							<div className="col-6">Table Number</div>
							<div className="col-6">Status</div>
						</div>
						<div className="row mt-4">
							<div className="col-6">#{tabelNumber}</div>
							<div className="col-6">Reserved</div>
						</div>
					</div>
				)}
				{showDetails && (
					<>
						<div className="row my-1">
							<div className="col-6">Table Number</div>
							<div className="col-6">#{tabelNumber}</div>
						</div>
						<div className="row my-1">
							<div className="col-6">Name</div>
							<div className="col-6">{name}</div>
						</div>
						<div className="row my-1">
							<div className="col-6">Number</div>
							<div className="col-6">{number}</div>
						</div>
						<div className="row my-1">
							<div className="col-6">Time</div>
							<div className="col-6">{time}</div>
						</div>
						<div className="row my-1">
							<div className="col-6">Order</div>
							<div className="col-6">{order}</div>
						</div>
					</>
				)}
			</div>
			<button
				className="me-5 bg-transparent border-0 px-5"
				style={{ color: "#ff8500" }}
				onClick={toggleDetails}
			>
				{showDetails ? "Hide Details" : "Details"}
			</button>
		</div>
	);
};

const EmptyTable = ({ tabelNumber, onReserveClick }) => {
	const handleReserve = () => {
		onReserveClick(tabelNumber);
	};

	return (
		<div
			className="d-flex justify-content-between align-items-center p-2 rounded-4"
			style={{ background: "#f8f8f8" }}
		>
			<div className="d-grid text-center w-25">
				<div className="row">
					<div className="col-6">Table Number</div>
					<div className="col-6">Status</div>
				</div>
				<div className="row mt-4">
					<div className="col-6">#{tabelNumber}</div>
					<div className="col-6">Not Reserved</div>
				</div>
			</div>
			<button
				className="me-5 border-0 rounded-2  py-2 px-5 text-white"
				style={{ background: "#ff8500" }}
				onClick={handleReserve}
			>
				Reserve
			</button>
		</div>
	);
};

const TableCard = ({
	state,
	tabelNumber,
	number,
	name,
	order,
	time,
	onReserveClick,
}) => {
	return (
		<>
			{state === "reserved" && (
				<ReservedTable
					name={name}
					tabelNumber={tabelNumber}
					order={order}
					time={time}
					number={number}
				/>
			)}
			{state === "empty" && (
				<EmptyTable tabelNumber={tabelNumber} onReserveClick={onReserveClick} />
			)}
		</>
	);
};

export default TableCard;
