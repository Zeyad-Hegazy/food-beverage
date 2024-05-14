import { Navbar } from "react-bootstrap";
import TableCard from "../components/TableCard";
import { useSelector } from "react-redux";
import ReserveForm from "./../components/ReserveForm";
import { useState } from "react";

const TableComponent = () => {
	const tables = useSelector((state) => state.table);
	const [selectedTable, setSelectedTable] = useState(null);

	const handleReserveClick = (tableNumber) => {
		setSelectedTable(tableNumber);
	};

	return (
		<div className="w-100 pe-4 ps-4 ms-4 pt-4 bg-white">
			<Navbar data-bs-theme="light" className="w-50">
				<input type="search" className="w-100" />
			</Navbar>

			<div className="d-flex gap-4">
				<div>All</div>
				<div>Reserved</div>
			</div>

			<main className="w-100 d-flex flex-column mt-5" style={{ gap: "1rem" }}>
				{selectedTable === null &&
					tables.map((table) => (
						<TableCard
							key={table.tableNumber}
							{...table}
							onReserveClick={handleReserveClick}
						/>
					))}

				{selectedTable && (
					<ReserveForm
						tableNumber={selectedTable}
						selectedTable={selectedTable}
						handleReserveClick={handleReserveClick}
					/>
				)}
			</main>
		</div>
	);
};

export default TableComponent;
