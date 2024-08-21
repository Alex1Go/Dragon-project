// import PropTypes from 'prop-types';
// const RocketItem = ({ rocket }) => {
//   return (
//     <div>
//       <img src={rocket.flickr_images[0]} alt={rocket.name} />
//       <h2>{rocket.name}</h2>
//       <ul>
//         <li>
//           Height: {rocket.height_w_trunk.meters} m /{' '}
//           {rocket.height_w_trunk.feet} ft
//         </li>
//         <li>
//           Diameter: {rocket.diameter.meters} m / {rocket.diameter.feet} ft
//         </li>
//         <li>
//           Spacecraft Volume:{' '}
//           {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{' '}
//           {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
//         </li>
//         <li>
//           Trunk Volume: {rocket.trunk.trunk_volume.cubic_meters} m³ /{' '}
//           {rocket.trunk.trunk_volume.cubic_feet} ft³
//         </li>
//         <li>
//           Launch Payload Mass: {rocket.launch_payload_mass.kg} kg /{' '}
//           {rocket.launch_payload_mass.lb} lbs
//         </li>
//         <li>
//           Return Payload Mass: {rocket.return_payload_mass.kg} kg /{' '}
//           {rocket.return_payload_mass.lb} lbs
//         </li>
//       </ul>
//     </div>
//   );
// };
// RocketItem.propTypes = {
//   rocket: PropTypes.shape({
//     flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     name: PropTypes.string.isRequired,
//     height_w_trunk: PropTypes.shape({
//       meters: PropTypes.number.isRequired,
//       feet: PropTypes.number.isRequired,
//     }).isRequired,
//     diameter: PropTypes.shape({
//       meters: PropTypes.number.isRequired,
//       feet: PropTypes.number.isRequired,
//     }).isRequired,
//     pressurized_capsule: PropTypes.shape({
//       payload_volume: PropTypes.shape({
//         cubic_meters: PropTypes.number.isRequired,
//         cubic_feet: PropTypes.number.isRequired,
//       }).isRequired,
//     }).isRequired,
//     trunk: PropTypes.shape({
//       trunk_volume: PropTypes.shape({
//         cubic_meters: PropTypes.number.isRequired,
//         cubic_feet: PropTypes.number.isRequired,
//       }).isRequired,
//     }).isRequired,
//     launch_payload_mass: PropTypes.shape({
//       kg: PropTypes.number.isRequired,
//       lb: PropTypes.number.isRequired,
//     }).isRequired,
//     return_payload_mass: PropTypes.shape({
//       kg: PropTypes.number.isRequired,
//       lb: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
// export default RocketItem;

// import { useSelector } from 'react-redux';

// const RocketItem = () => {
//   const rockets = useSelector((state) => state.dragons.items);

//   if (!rockets.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {rockets.map((rocket) => (
//         <div key={rocket.id} style={{ marginBottom: '20px' }}>
//           <img
//             src={rocket.flickr_images[0]}
//             alt={rocket.name}
//             style={{
//               width: '100%',
//               maxHeight: '300px',
//               objectFit: 'cover',
//             }}
//           />
//           <h2>{rocket.name}</h2>
//           <ul>
//             <li>
//               Height: {rocket.height_w_trunk.meters} m /{' '}
//               {rocket.height_w_trunk.feet} ft
//             </li>
//             <li>
//               Diameter: {rocket.diameter.meters} m / {rocket.diameter.feet} ft
//             </li>
//             <li>
//               Spacecraft Volume:{' '}
//               {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{' '}
//               {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
//             </li>
//             <li>
//               Trunk Volume: {rocket.trunk.trunk_volume.cubic_meters} m³ /{' '}
//               {rocket.trunk.trunk_volume.cubic_feet} ft³
//             </li>
//             <li>
//               Launch Payload Mass: {rocket.launch_payload_mass.kg} kg /{' '}
//               {rocket.launch_payload_mass.lb} lbs
//             </li>
//             <li>
//               Return Payload Mass: {rocket.return_payload_mass.kg} kg /{' '}
//               {rocket.return_payload_mass.lb} lbs
//             </li>
//           </ul>
//         </div>
//       ))}
//     </>
//   );
// };

// export default RocketItem;

import { useEffect } from 'react';
import { fetchDragons } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';

const RocketItem = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.dragons.items);
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <>
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          {rocket.flickr_images.map((image, index) => (
            <div key={index[0]} style={{ marginBottom: '20px' }}>
              <img
                src={image}
                alt={rocket.name}
                style={{
                  width: '100%',
                  maxHeight: '300px',
                  objectFit: 'cover',
                }}
              />
              <h2>{rocket.name}</h2>
              <div>
                <p>
                  <strong>HEIGHT:</strong> {rocket.height_w_trunk.meters} m /{' '}
                  {rocket.height_w_trunk.feet} ft
                </p>
                <p>
                  <strong>DIAMETER:</strong> {rocket.diameter.meters} m /{' '}
                  {rocket.diameter.feet} ft
                </p>
                <p>
                  <strong>SPACECRAFT VOLUME:</strong>{' '}
                  {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{' '}
                  {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
                </p>
                <p>
                  <strong>TRUNK VOLUME:</strong>{' '}
                  {rocket.trunk.trunk_volume.cubic_meters} m³ /{' '}
                  {rocket.trunk.trunk_volume.cubic_feet} ft³
                </p>
                <p>
                  <strong>LAUNCH PAYLOAD MASS:</strong>{' '}
                  {rocket.launch_payload_mass.kg} kg /{' '}
                  {rocket.launch_payload_mass.lb} lbs
                </p>
                <p>
                  <strong>RETURN PAYLOAD MASS:</strong>{' '}
                  {rocket.return_payload_mass.kg} kg /{' '}
                  {rocket.return_payload_mass.lb} lbs
                </p>
              </div>
            </div>
          ))}
        </li>
      ))}
    </>
  );
};
export default RocketItem;
