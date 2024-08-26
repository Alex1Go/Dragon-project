import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sprite from '../../assets/sprite.svg';
import { fetchDragons } from '../../redux/operation';
import { selectDragons } from '../../redux/selector';
import {
  FooterContainer,
  ImageSlide,
  Image,
  Description,
  Title,
  Infobox,
} from './Footer.styled';
import CustomArrow from '../../helpers/ArrowForFooter';

const Footer = () => {
  const dispatch = useDispatch();
  const dragons = useSelector(selectDragons);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div style={{ bottom: '32px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '16px',
          height: '16px',
        }}
      >
        <svg
          style={{
            width: '16px',
            color: 'white',
            opacity: i === activeSlide ? '1' : '0.5',
            transform: i === activeSlide ? 'scale(1.2)' : 'scale(1)',
            transition: 'opacity 0.3s, transform 0.3s',
            cursor: 'pointer',
          }}
        >
          <use href={sprite + '#icon-Ellipse-1'} />
        </svg>
      </div>
    ),
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <FooterContainer>
      <Slider {...settings}>
        {dragons.items.map((dragon) =>
          dragon.flickr_images.map((image, index) => (
            <ImageSlide key={index}>
              <Image src={image} alt={dragon.name} />
              <Infobox>
                <Title>STARSHIP CAPABILITIES</Title>
                <Description>{dragon.description}</Description>
              </Infobox>
            </ImageSlide>
          ))
        )}
      </Slider>
    </FooterContainer>
  );
};

export default Footer;

