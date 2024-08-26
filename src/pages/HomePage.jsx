import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import RocketSlider from '../components/Rockets/Rockets';
import Team from '../components/Team/Team';
import Total from '../components/Total/Total';
import { Container, ContainerTwo } from '../styles/GlobalStyles';

const HomePage = () => {
  return (
    <>
      <Container>
        <ContainerTwo>
          <Hero />
          <RocketSlider />
          <Total />
          <About />
        </ContainerTwo>
        <Team />
        <Footer />
      </Container>
    </>
  );
};
export default HomePage;
