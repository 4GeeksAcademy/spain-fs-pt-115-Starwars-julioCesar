import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardPersonajes } from "../components/CardPersonajes.jsx";
import { CardPlanetas } from "../components/CardPlanetas.jsx";

export const Home = () => {

	return (
		<div className="text-center mt-5 ">
			<CardPersonajes />
			<CardPlanetas />
		</div>
	);
}; 