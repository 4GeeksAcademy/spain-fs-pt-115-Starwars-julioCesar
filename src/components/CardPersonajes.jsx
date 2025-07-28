import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { getPersonajes } from "../services/servicesAPI.js";
import { Informacion } from "./Informacion.jsx";

export const CardPersonajes = () => {

    const { store, dispatch } = useGlobalReducer();


    useEffect(() => {
        getPersonajes().then((data) => {
            dispatch({
                type: 'set_personajes',
                payload: data
            });
        });
    }, []);

    return (

        <div className="container">
            <h1 style={{ color: "white" }} className="mb-5 mt-5">PERSONAJES</h1>
            <div className="row">
                {store.personajes.map((personaje) => {
                    const esFavorito = store.favoritos.some((f) => f.id === personaje.id && f.tipo === "personaje");
                    return (
                        <div className="col-md-3 mb-4" key={personaje.id}>
                            <div className="card h-100">
                                <img
                                    src={personaje.image}
                                    className="card-img-top img-fluid"
                                    style={{ height: "250px", objectFit: "contain", backgroundColor: "#000" }}
                                    alt={personaje.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{personaje.name}</h5>
                                    <p className="card-text">{personaje.race}</p>
                                    <Link to={`/personaje/${personaje.id}`}>
                                        <button className="btn btn-primary">Saber más</button>
                                    </Link>
                                    <button type="button" className={`btn ms-5 ${esFavorito ? "btn-danger" : "btn-outline-dark"}`}
                                        onClick={() => dispatch({ type: 'toggle_favorito', payload: { ...personaje, tipo: "personaje" } })}>
                                        <i className={esFavorito ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}