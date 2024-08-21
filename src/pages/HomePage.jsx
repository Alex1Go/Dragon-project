import Hero from '../components/Hero/Hero';
import RocketSlider from '../components/Rockets/Rockets';
import { Container } from '../styles/GlobalStyles';

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <RocketSlider />
      </Container>
    </>
  );
};
export default HomePage;
