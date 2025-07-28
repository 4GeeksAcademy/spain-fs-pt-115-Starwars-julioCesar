import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const InfoPlanetas = () => {

    const { id } = useParams();
    const { store } = useGlobalReducer();

    const planeta = store.planetas.find(p => p.id === parseInt(id));



    return (
        <div className="container mt-5">
            <div className="card mb-3">
                <img src={planeta.image} className="card-img-top" alt={planeta.name}
                    style={{ height: "250px", objectFit: "contain", backgroundColor: "#000" }} />
                <div className="card-body">
                    <h5 className="card-title">{planeta.name}</h5>
                    <p className="card-text">{planeta.description}</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};