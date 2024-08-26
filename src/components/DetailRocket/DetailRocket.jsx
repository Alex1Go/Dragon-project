import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDragons } from '../../redux/selector';
import {
  Data,
  Img,
  InfoBox,
  Item,
  List,
  Rocket,
  Text,
  Title,
  Title2,
} from './DetailRocket.styled';
import { useEffect } from 'react';

const DetailRocket = () => {
  const { id } = useParams();
  const location = useLocation();
  const rockets = useSelector(selectDragons);
  const rocket = rockets.items.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!rocket) {
    return <div>Rocket not found</div>;
  }
  const imageToShow = location.state?.image || rocket.flickr_images[0];
  return (
    <div style={{ paddingTop: '179px' }}>
      <Title>{rocket.name}</Title>
      <Rocket>
        <Img src={imageToShow} alt={rocket.name} />
        <InfoBox>
          <Title2>{rocket.name}</Title2>
          <List>
            <Item>
              <Text>FIRST FLIGHT</Text>
              <Data>{rocket.first_flight}</Data>
            </Item>
            <Item>
              <Text>HEIGHT</Text>
              <Data>
                {rocket.height_w_trunk.meters} m / {rocket.height_w_trunk.feet}{' '}
                ft
              </Data>
            </Item>
            <Item>
              <Text>DIAMETER</Text>
              <Data>
                {rocket.diameter.meters} m / {rocket.diameter.feet} ft
              </Data>
            </Item>
            <Item>
              <Text>TEMP DEGREES</Text>
              <Data>{rocket.heat_shield.temp_degrees}</Data>
            </Item>
            <Item>
              <Text>MATERIAL</Text>
              <Data>{rocket.heat_shield.material}</Data>
            </Item>
            <Item>
              <Text>PARTNER</Text>
              <Data>{rocket.heat_shield.dev_partner}</Data>
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
            <Item>
              <Text>LAUNCH PAYLOAD VOL</Text>
              <Data>
                {rocket.launch_payload_vol.cubic_meters} /{' '}
                {rocket.launch_payload_vol.cubic_feet}
              </Data>
            </Item>
          </List>
        </InfoBox>
      </Rocket>
    </div>
  );
};

export default DetailRocket;
