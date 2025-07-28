import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getPlanetas } from "../services/servicesAPI";
import { useEffect } from "react";

export const CardPlanetas = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getPlanetas().then((data) => {
            dispatch({
                type: 'set_planetas',
                payload: data
            });
        });
    }, []);


    console.log(getPlanetas);

    return (
        <div className="container mb-5">
            <h1 style={{ color: "white"}} className="mb-5 mt-5">PLANETAS</h1>
            <div className="row">
                {store.planetas.map((planeta) => {
                    const esFavorito = store.favoritos.some((f) => f.id === planeta.id && f.tipo === "planeta");
                    return (
                        <div className="col-md-3 mb-4" key={planeta.id}>
                            <div className="card h-100" >
                                <img src={planeta.image}
                                    className="card-img-top img-fluid" alt={planeta}
                                    style={{ height: "250px", objectFit: "contain", backgroundColor: "#000" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{planeta.name}</h5>

                                    <Link to={`planeta/${planeta.id}`}>
                                        <button className="btn btn-primary">Saber mas</button>
                                    </Link>
                                    <button type="button" className={`btn ms-5 ${esFavorito ? 'btn-danger' : 'btn-outline-dark'}`}
                                        onClick={() => dispatch({ type: 'toggle_favorito', payload: { ...planeta, tipo: "planeta" } })}>
                                        <i className={esFavorito ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}