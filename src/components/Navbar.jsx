import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="data:image/png;base64,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"
						style={{ width: "60px", height: "60px" }} alt="Icono" />
				</Link>
				<div className="ml-auto">

					<div className="btn-group">
						<button
							type="button"
							className="btn btn-secondary dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favoritos <span className="badge bg-dark">{store.favoritos.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favoritos.length === 0 ? (
								<li>
									<span className="dropdown-item-text">Sin favoritos</span>
								</li>
							) : (
								store.favoritos.map((item) => (
									<li
										key={`${item.tipo}-${item.id}`}
										className="d-flex justify-content-between align-items-center px-2"
									>
										<Link
											to={`/${item.tipo}/${item.id}`}
											className="dropdown-item flex-grow-1"
										>
											{item.name}
										</Link>
										<button
											className="btn btn-sm btn-danger ms-2"
											onClick={() =>
												dispatch({
													type: "toggle_favorito",
													payload: { id: item.id, tipo: item.tipo }
												})
											}
										>
											<i className="fa-solid fa-trash-can"></i>
										</button>
									</li>
								))
							)}
						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};