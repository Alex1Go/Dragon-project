import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { RocketInfo, RocketSlide } from "./RocketItem.styled";

const RocketItem = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/dragons"
        );
        setRockets(response.data);
      } catch (error) {
        console.error("Error fetching rocket data:", error);
      }
    };

    fetchRockets();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Показываем три элемента
    slidesToScroll: 1, // Прокручиваем по одному элементу
  };
  return (
    <>
      <Slider {...settings}>
        {rockets.map((rocket) => (
          <RocketSlide key={rocket.id}>
            <img
              src={rocket.flickr_images}
              alt={rocket.name}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
              }}
            />
            {/* {rocket.flickr_images && rocket.flickr_images.map((image, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <img
                  src={image}
                  alt={rocket.name}
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                /> */}
            <RocketInfo>
              <h3>{rocket.name}</h3>
              <p>
                <strong>Height:</strong> {rocket.height_w_trunk.meters} m /{" "}
                {rocket.height_w_trunk.feet} ft
              </p>
              <p>
                <strong>Diameter:</strong> {rocket.diameter.meters} m /{" "}
                {rocket.diameter.feet} ft
              </p>
              <p>
                <strong>Spacecraft Volume:</strong>{" "}
                {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{" "}
                {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
              </p>
              <p>
                <strong>Trunk Volume:</strong>{" "}
                {rocket.trunk.trunk_volume.cubic_meters} m³ /{" "}
                {rocket.trunk.trunk_volume.cubic_feet} ft³
              </p>
              <p>
                <strong>Launch Payload Mass:</strong>{" "}
                {rocket.launch_payload_mass.kg} kg /{" "}
                {rocket.launch_payload_mass.lb} lbs
              </p>
              <p>
                <strong>Return Payload Mass:</strong>{" "}
                {rocket.return_payload_mass.kg} kg /{" "}
                {rocket.return_payload_mass.lb} lbs
              </p>
            </RocketInfo>
          </RocketSlide>
        ))}
      </Slider>
    </>
  );
};
export default RocketItem;
{
  /* <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.flickr_images.map((image, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <img
                  src={image}
                  alt={rocket.name}
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                />
                <h2>{rocket.name}</h2>
                <div>
                  <p>
                    <strong>HEIGHT:</strong> {rocket.height_w_trunk.meters} m /{" "}
                    {rocket.height_w_trunk.feet} ft
                  </p>
                  <p>
                    <strong>DIAMETER:</strong> {rocket.diameter.meters} m /{" "}
                    {rocket.diameter.feet} ft
                  </p>
                  <p>
                    <strong>SPACECRAFT VOLUME:</strong>{" "}
                    {rocket.pressurized_capsule.payload_volume.cubic_meters} m³
                    / {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
                  </p>
                  <p>
                    <strong>TRUNK VOLUME:</strong>{" "}
                    {rocket.trunk.trunk_volume.cubic_meters} m³ /{" "}
                    {rocket.trunk.trunk_volume.cubic_feet} ft³
                  </p>
                  <p>
                    <strong>LAUNCH PAYLOAD MASS:</strong>{" "}
                    {rocket.launch_payload_mass.kg} kg /{" "}
                    {rocket.launch_payload_mass.lb} lbs
                  </p>
                  <p>
                    <strong>RETURN PAYLOAD MASS:</strong>{" "}
                    {rocket.return_payload_mass.kg} kg /{" "}
                    {rocket.return_payload_mass.lb} lbs
                  </p>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul> */
}
{
  /* <ul>
        {rockets.map((rocket) => (
          <li
            key={rocket.id}
            style={{ marginBottom: "30px", listStyleType: "none" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {rocket.flickr_images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${rocket.name} image ${index + 1}`}
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>{rocket.name}</h2>
                <div>
                  <strong>HEIGHT:</strong> {rocket.height_w_trunk.meters} m /{" "}
                  {rocket.height_w_trunk.feet} ft
                </div>
                <div>
                  <strong>DIAMETER:</strong> {rocket.diameter.meters} m /{" "}
                  {rocket.diameter.feet} ft
                </div>
                <div>
                  <strong>SPACECRAFT VOLUME:</strong>{" "}
                  {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{" "}
                  {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
                </div>
                <div>
                  <strong>TRUNK VOLUME:</strong>{" "}
                  {rocket.trunk.trunk_volume.cubic_meters} m³ /{" "}
                  {rocket.trunk.trunk_volume.cubic_feet} ft³
                </div>
                <div>
                  <strong>LAUNCH PAYLOAD MASS:</strong>{" "}
                  {rocket.launch_payload_mass.kg} kg /{" "}
                  {rocket.launch_payload_mass.lb} lbs
                </div>
                <div>
                  <strong>RETURN PAYLOAD MASS:</strong>{" "}
                  {rocket.return_payload_mass.kg} kg /{" "}
                  {rocket.return_payload_mass.lb} lbs
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul> */
}
{
  /* <ul className="rocket-list">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <div className="rocket-images">
              {rocket.flickr_images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${rocket.name} image ${index + 1}`}
                />
              ))}
            </div>
            <div className="rocket-details">
              <h2>{rocket.name}</h2>
              <p>
                <strong>HEIGHT:</strong> {rocket.height_w_trunk.meters} m /{" "}
                {rocket.height_w_trunk.feet} ft
              </p>
              <p>
                <strong>DIAMETER:</strong> {rocket.diameter.meters} m /{" "}
                {rocket.diameter.feet} ft
              </p>
              <p>
                <strong>SPACECRAFT VOLUME:</strong>{" "}
                {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{" "}
                {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
              </p>
              <p>
                <strong>TRUNK VOLUME:</strong>{" "}
                {rocket.trunk.trunk_volume.cubic_meters} m³ /{" "}
                {rocket.trunk.trunk_volume.cubic_feet} ft³
              </p>
              <p>
                <strong>LAUNCH PAYLOAD MASS:</strong>{" "}
                {rocket.launch_payload_mass.kg} kg /{" "}
                {rocket.launch_payload_mass.lb} lbs
              </p>
              <p>
                <strong>RETURN PAYLOAD MASS:</strong>{" "}
                {rocket.return_payload_mass.kg} kg /{" "}
                {rocket.return_payload_mass.lb} lbs
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket-details">
            <h2>{rocket.name}</h2>
            <div className="rocket-images">
              {rocket.flickr_images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${rocket.name} ${index + 1}`}
                />
              ))}
            </div>
            <ul>
              <li>
                <strong>Height:</strong> {rocket.height_w_trunk.meters} m /{" "}
                {rocket.height_w_trunk.feet} ft
              </li>
              <li>
                <strong>Diameter:</strong> {rocket.diameter.meters} m /{" "}
                {rocket.diameter.feet} ft
              </li>
              <li>
                <strong>Spacecraft Volume:</strong>{" "}
                {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{" "}
                {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
              </li>
              <li>
                <strong>Trunk Volume:</strong>{" "}
                {rocket.trunk.trunk_volume.cubic_meters} m³ /{" "}
                {rocket.trunk.trunk_volume.cubic_feet} ft³
              </li>
              <li>
                <strong>Launch Payload Mass:</strong>{" "}
                {rocket.launch_payload_mass.kg} kg /{" "}
                {rocket.launch_payload_mass.lb} lbs
              </li>
              <li>
                <strong>Return Payload Mass:</strong>{" "}
                {rocket.return_payload_mass.kg} kg /{" "}
                {rocket.return_payload_mass.lb} lbs
              </li>
            </ul>
          </div>
        ))}
      </div>{" "}
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <h2>{rocket.name}</h2>
            <div>
              <strong>HEIGHT</strong>
              <p>
                {rocket.height_w_trunk.meters} m / {rocket.height_w_trunk.feet}{" "}
                ft
              </p>
            </div>
            <div>
              <strong>DIAMETER</strong>
              <p>
                {rocket.diameter.meters} m / {rocket.diameter.feet} ft
              </p>
            </div>
            <div>
              <strong>SPACECRAFT VOLUME</strong>
              <p>
                {rocket.pressurized_capsule.payload_volume.cubic_meters} m³ /{" "}
                {rocket.pressurized_capsule.payload_volume.cubic_feet} ft³
              </p>
            </div>
            <div>
              <strong>TRUNK VOLUME</strong>
              <p>
                {rocket.trunk.trunk_volume.cubic_meters} m³ /{" "}
                {rocket.trunk.trunk_volume.cubic_feet} ft³
              </p>
            </div>
            <div>
              <strong>LAUNCH PAYLOAD MASS</strong>
              <p>
                {rocket.launch_payload_mass.kg} kg /{" "}
                {rocket.launch_payload_mass.lb} lbs
              </p>
            </div>
            <div>
              <strong>RETURN PAYLOAD MASS</strong>
              <p>
                {rocket.return_payload_mass.kg} kg /{" "}
                {rocket.return_payload_mass.lb} lbs
              </p>
            </div>
          </li>
        ))}
      </ul> */
}
