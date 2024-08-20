// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import RocketDetailItem from "../components/RocketDetailItem";

// const RocketDetails = () => {
//   const { id } = useParams();
//   const rocket = useSelector((state) =>
//     state.rockets.items.find((r) => r.id === id)
//   );

//   if (!rocket) {
//     return <div>Rocket not found!</div>;
//   }

//   return (
//     <div>
//       <h2>{rocket.name}</h2>
//       <RocketDetailItem rocket={rocket} />
//     </div>
//   );
// };

// export default RocketDetails;
