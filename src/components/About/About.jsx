import { SvgBox, SvgStyled, Title, VideoBox, VideoLink } from './About.styled';
import sprite from '../../assets/sprite.svg';

const About = () => {
  return (
    <>
      <section style={{ paddingBottom: '100px' }}>
        <Title>About us</Title>
        <VideoBox>
          <VideoLink to="https://www.youtube.com/watch?v=921VbEMAwwY&t=1s">
            <SvgBox>
              <SvgStyled>
                <use href={sprite + '#icon-play'} />
              </SvgStyled>
            </SvgBox>
          </VideoLink>
        </VideoBox>
      </section>
    </>
  );
};
export default About;
