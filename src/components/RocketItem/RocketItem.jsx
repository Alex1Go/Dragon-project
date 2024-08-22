import PropTypes from 'prop-types';
import {
  Data,
  Img,
  Infobox,
  Item,
  Itembox,
  List,
  Text,
  Title,
} from './RocketItem.styled';
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

// import { useEffect } from 'react';
// import { fetchDragons } from '../../redux/operation';
// import { useDispatch, useSelector } from 'react-redux';
// import { Img, Item, Itemblock, Itembox } from './RocketItem.styled';

// const RocketItem = () => {
//   const dispatch = useDispatch();
//   const rockets = useSelector((state) => state.dragons.items);
//   useEffect(() => {
//     dispatch(fetchDragons());
//   }, [dispatch]);

//   return (
//     <Itemblock>
//       {rockets.map((rocket) => (
//         <Item key={rocket.id}>
//           {rocket.flickr_images.map((image, index) => (
//             <Itembox key={index[0]}>
//               <Img
//                 src={image}
//                 alt={rocket.name}
//                 // style={{
//                 //   width: '100%',
//                 //   maxHeight: '300px',
//                 //   objectFit: 'cover',
//                 // }}
//               />
//               <h2>{rocket.name}</h2>
//               <div>
//                 <p>
//                   <strong>HEIGHT:</strong> {rocket.height_w_trunk.meters} m /{' '}
//                   {rocket.height_w_trunk.feet} ft
//                 </p>
//                 <p>
//                   <strong>DIAMETER:</strong> {rocket.diameter.meters} m /{' '}
//                   {rocket.diameter.feet} ft
//                 </p>
//                 <p>
//                   <strong>SPACECRAFT VOLUME:</strong>{' '}
//                   {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{' '}
//                   {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
//                 </p>
//                 <p>
//                   <strong>TRUNK VOLUME:</strong>{' '}
//                   {rocket.trunk.trunk_volume.cubic_meters} m³ /{' '}
//                   {rocket.trunk.trunk_volume.cubic_feet} ft³
//                 </p>
//                 <p>
//                   <strong>LAUNCH PAYLOAD MASS:</strong>{' '}
//                   {rocket.launch_payload_mass.kg} kg /{' '}
//                   {rocket.launch_payload_mass.lb} lbs
//                 </p>
//                 <p>
//                   <strong>RETURN PAYLOAD MASS:</strong>{' '}
//                   {rocket.return_payload_mass.kg} kg /{' '}
//                   {rocket.return_payload_mass.lb} lbs
//                 </p>
//               </div>
//             </Itembox>
//           ))}
//         </Item>
//       ))}
//     </Itemblock>
//   );
// };
// export default RocketItem;
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDragons } from '../../redux/operation';
// import { selectDragons } from '../../redux/selector';
// import { Img, Itemblock, Itembox } from './RocketItem.styled';
// const RocketItem = () => {
//   const dispatch = useDispatch();
//   const { items: rockets, status } = useSelector(selectDragons);

//   useEffect(() => {
//     dispatch(fetchDragons());
//   }, [dispatch]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error loading rockets.</div>;
//   }

//   return (
//     <Itemblock>
//       {rockets.map((rocket) =>
//         rocket.flickr_images.map((image, index) => (
//           <Itembox key={index} style={{ marginBottom: '20px' }}>
//             <Img
//               src={image}
//               alt={rocket.name}
//               style={{
//                 width: '100%',
//                 maxHeight: '300px',
//                 objectFit: 'cover',
//               }}
//             />
//             <h2>{rocket.name}</h2>
//             <div>
//               <p>
//                 <strong>HEIGHT:</strong> {rocket.height_w_trunk.meters} m /{' '}
//                 {rocket.height_w_trunk.feet} ft
//               </p>
//               <p>
//                 <strong>DIAMETER:</strong> {rocket.diameter.meters} m /{' '}
//                 {rocket.diameter.feet} ft
//               </p>
//               <p>
//                 <strong>SPACECRAFT VOLUME:</strong>{' '}
//                 {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{' '}
//                 {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
//               </p>
//               <p>
//                 <strong>TRUNK VOLUME:</strong>{' '}
//                 {rocket.trunk.trunk_volume.cubic_meters} m³ /{' '}
//                 {rocket.trunk.trunk_volume.cubic_feet} ft³
//               </p>
//               <p>
//                 <strong>LAUNCH PAYLOAD MASS:</strong>{' '}
//                 {rocket.launch_payload_mass.kg} kg /{' '}
//                 {rocket.launch_payload_mass.lb} lbs
//               </p>
//               <p>
//                 <strong>RETURN PAYLOAD MASS:</strong>{' '}
//                 {rocket.return_payload_mass.kg} kg /{' '}
//                 {rocket.return_payload_mass.lb} lbs
//               </p>
//             </div>
//           </Itembox>
//         ))
//       )}
//     </Itemblock>
//   );
// };

// export default RocketItem;

const RocketItem = ({ rocket }) => {
  return (
    <Itembox>
      <Img
        src={rocket.image}
        alt={rocket.name}
        style={{
          objectFit: 'cover',
        }}
      />
      <Title>{rocket.name}</Title>
      <Infobox>
        <List>
          <Item>
            <Text>HEIGHT</Text>
            <Data>
              {rocket.height_w_trunk.meters} m / {rocket.height_w_trunk.feet} ft
            </Data>
          </Item>
          <Item>
            <Text>DIAMETER</Text>
            <Data>
              {rocket.diameter.meters} m / {rocket.diameter.feet} ft
            </Data>
          </Item>
          <Item>
            <Text>SPACECRAFT VOLUME</Text>
            <Data>
              {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{' '}
              {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
            </Data>
          </Item>
          <Item>
            <Text>TRUNK VOLUME</Text>
            <Data>
              {rocket.trunk.trunk_volume.cubic_meters} m³ /{' '}
              {rocket.trunk.trunk_volume.cubic_feet} ft³
            </Data>
          </Item>
          <Item>
            <Text>LAUNCH PAYLOAD MASS</Text>
            <Data>
              {rocket.launch_payload_mass.kg} kg /{' '}
              {rocket.launch_payload_mass.lb} lbs
            </Data>
          </Item>
          <Item>
            <Text>RETURN PAYLOAD MASS</Text>
            <Data>
              {rocket.return_payload_mass.kg} kg /{' '}
              {rocket.return_payload_mass.lb} lbs
            </Data>
          </Item>
        </List>
      </Infobox>
    </Itembox>
  );
};
RocketItem.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    height_w_trunk: PropTypes.shape({
      meters: PropTypes.number.isRequired,
      feet: PropTypes.number.isRequired,
    }).isRequired,
    diameter: PropTypes.shape({
      meters: PropTypes.number.isRequired,
      feet: PropTypes.number.isRequired,
    }).isRequired,
    pressurized_capsule: PropTypes.shape({
      payload_volume: PropTypes.shape({
        cubic_meters: PropTypes.number.isRequired,
        cubic_feet: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    trunk: PropTypes.shape({
      trunk_volume: PropTypes.shape({
        cubic_meters: PropTypes.number.isRequired,
        cubic_feet: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    launch_payload_mass: PropTypes.shape({
      kg: PropTypes.number.isRequired,
      lb: PropTypes.number.isRequired,
    }).isRequired,
    return_payload_mass: PropTypes.shape({
      kg: PropTypes.number.isRequired,
      lb: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default RocketItem;
