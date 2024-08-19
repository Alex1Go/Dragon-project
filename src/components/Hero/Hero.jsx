import { Herofon, Line, SvgStyled, Title } from "./Hero.styled";
import sprite from "../../assets/sprite.svg";

const Hero = () => {
  return (
    <>
      <section style={{ paddingTop: "48px", paddingBottom: "100px" }}>
        <Herofon>
          <Title>dive deep in to the future</Title>
          <div>
            <SvgStyled>
              <use href={sprite + "#icon-Group-2"} />
            </SvgStyled>
            <Line></Line>
          </div>
        </Herofon>
      </section>
    </>
  );
};
export default Hero;
