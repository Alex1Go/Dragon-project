import RocketItem from "../RocketItem/RocketItem";

const Rockets = () => {
  return (
    <>
      <section>
        <h2>Our rockets</h2>

        <RocketItem />
      </section>
    </>
  );
};
export default Rockets;

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import RocketItem from "../RocketItem/RocketItem";
// import { fetchRockets } from "../../redux/rocketsSlice";
// const RocketsList = () => {
//   const dispatch = useDispatch();
//   const rockets = useSelector((state) => state.rockets.items);

//   useEffect(() => {
//     dispatch(fetchRockets());
//   }, [dispatch]);

//   return (
//     <ul className="rockets-list">
//       {rockets.map((rocket) => (
//         <RocketItem key={rocket.id} rocket={rocket} />
//       ))}
//     </ul>
//   );
// };

// export default RocketsList;
