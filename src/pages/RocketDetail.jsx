import AfterFooter from '../components/AfterFooter/AfterFooter';
import DetailRocket from '../components/DetailRocket/DetailRocket';
import Footer from '../components/Footer/Footer';
import { Container, ContainerTwo } from '../styles/GlobalStyles';

const RocketDetail = () => {
  return (
    <>
      <Container>
        <ContainerTwo>
          <DetailRocket />
        </ContainerTwo>
        <Footer />
        <AfterFooter />
      </Container>
    </>
  );
};
export default RocketDetail;
