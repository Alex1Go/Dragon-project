import { Herofon, Line, SvgStyled, Title } from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <Herofon>
        <Title>dive deep in to the future</Title>
        <SvgStyled>
          <use href={"../../assets/Group.svg"} />
        </SvgStyled>
        <Line></Line>
      </Herofon>
    </>
  );
};
export default Hero;
