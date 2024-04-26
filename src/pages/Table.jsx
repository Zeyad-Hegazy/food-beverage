import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { toggleMealForm } from "../store/slices/TableSlice";
import MealForm from "./../components/MealForm";

const TableComponent = () => {
	const dispatch = useDispatch();
	const tables = useSelector((state) => state.table.tables);

	const handleAddMealClick = (table) => {
		dispatch(toggleMealForm(table));
	};

	return (
		<div>
			<h2>Restaurant Tables</h2>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Status</th>
						<th>Meals</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{tables.map((table) => (
						<>
							<tr key={table.id}>
								<td>{table.id}</td>
								<td>{table.status}</td>
								<td>
									{tables.meals ? (
										<ul>
											{table.meals.map((meal) => (
												<li key={meal.id}>
													{meal.name} - {meal.price}
												</li>
											))}
										</ul>
									) : (
										<button
											className="btn btn-primary"
											onClick={() => handleAddMealClick(table)}
										>
											no meals (add new meal)
										</button>
									)}
								</td>
								<td>
									<button className="btn btn-primary">change status</button>
								</td>
							</tr>
							{table.isMealFormOpen && <MealForm tableId={table.id} />}
						</>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TableComponent;
