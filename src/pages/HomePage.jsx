import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import RocketSlider from '../components/Rockets/Rockets';
import Total from '../components/Total/Total';
import { Container } from '../styles/GlobalStyles';

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
        <RocketSlider />
        <Total />
        <About />
      </Container>
    </>
  );
};
export default HomePage;
