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

