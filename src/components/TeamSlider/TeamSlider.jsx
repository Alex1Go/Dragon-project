import { useState, useEffect, useRef } from 'react';
import teamData from '../../helpers/team.json';
import sprite from '../../assets/sprite.svg';
import {
  Img,
  ImgBox,
  Name,
  NavButton,
  Role,
  Slide,
  SliderContainer,
  SlidesWrapper,
  SvgStyled,
} from './TeamSlider.styled';

const images = import.meta.glob('../../assets/team/*.png', { eager: true });

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = teamData.length;
  const slideRef = useRef();

  // const goToSlide = (index) => {
  //   setCurrentIndex(index);
  // };

  useEffect(() => {
    const slide = slideRef.current;
    let startX = 0;
    let endX = 0;

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
      );
    };

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX - endX > 50) {
        nextSlide();
      } else if (startX - endX < -50) {
        prevSlide();
      }
    };

    slide.addEventListener('touchstart', handleTouchStart);
    slide.addEventListener('touchmove', handleTouchMove);
    slide.addEventListener('touchend', handleTouchEnd);

    return () => {
      slide.removeEventListener('touchstart', handleTouchStart);
      slide.removeEventListener('touchmove', handleTouchMove);
      slide.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, totalSlides]);

  return (
    <SliderContainer>
      <NavButton
        direction="prev"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
          )
        }
        aria-label="Previous Slide"
      >
        <SvgStyled>
          <use href={sprite + '#icon-Vector-8'} />
        </SvgStyled>
      </NavButton>

      <NavButton
        direction="next"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
          )
        }
        aria-label="Next Slide"
      >
        <SvgStyled style={{ transform: 'rotate(180deg)' }}>
          <use href={sprite + '#icon-Vector-8'} />
        </SvgStyled>
      </NavButton>
      <SlidesWrapper translate={-currentIndex * 100} ref={slideRef}>
        {teamData.map((member) => {
          const imagePath = `../../assets${member.image}`;
          const imageSrc = images[imagePath]?.default || images[imagePath];
          return (
            <Slide key={member.id}>
              <ImgBox>
                <Img src={imageSrc} alt={member.name} />
                <Role>{member.role}</Role>
                <Name>{member.name}</Name>
              </ImgBox>
            </Slide>
          );
        })}
      </SlidesWrapper>

      {/* <DotsContainer>
        {teamData.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer> */}
    </SliderContainer>
  );
};

export default TeamSlider;
