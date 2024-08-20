// import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Rockets from "../components/Rockets/Rockets";
import { Container } from "../styles/GlobalStyles";
// import { useEffect } from "react";
// import { fetchRockets } from "../redux/rocketsSlice";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const rockets = useSelector((state) => state.rockets.items);
  // useEffect(() => {
  //   dispatch(fetchRockets());
  // }, [dispatch]);
  return (
    <>
      <Container>
        <Hero />
        <Rockets />
      </Container>
    </>
  );
};
export default HomePage;
