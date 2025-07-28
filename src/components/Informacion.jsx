
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Informacion = () => {

    const { id } = useParams();
    const { store } = useGlobalReducer();

    const personaje = store.personajes.find(p => p.id === parseInt(id));

    if (!personaje) {
        return <p className="mt-5">Cargando personaje...</p>;
    }

    console.log(personaje);
    return (
        <div className="container">
            <div className="card mb-5 mt-5">
                <img src={personaje.image} className="card-img-top" alt={personaje.name}
                    style={{ height: "250px", objectFit: "contain", backgroundColor: "#000" }} />
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p className="card-text">Tipo: {personaje.race}</p>
                    <p className="card-text">Genero: {personaje.gender}</p>
                    <p className="card-text">Afiliacion: {personaje.affiliation}</p>
                    <p className="card-text"><small className="text-body-secondary">Description: {personaje.description}</small></p>
                </div>
            </div>
        </div>
    )
}