import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchDragons } from '../../redux/operation';
import { selectDragons } from '../../redux/selector';
import {
  FooterContainer,
  ImageSlide,
  Image,
  Description,
  CustomArrow,
  SvgStyled,
  Title,
  Infobox,
} from './Footer.styled';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import sprite from '../../assets/sprite.svg';

const Footer = () => {
  const dispatch = useDispatch();
  const dragons = useSelector(selectDragons);

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
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div style={{ color: 'white' }}>●</div>,
    nextArrow: (
      <CustomArrow direction="right">
        <SvgStyled>
          <use href={`${sprite}#icon-Vector-8`} />
        </SvgStyled>
      </CustomArrow>
    ),
    prevArrow: (
      <CustomArrow direction="left">
        <SvgStyled>
          <use href={`${sprite}#icon-Vector-8`} />
        </SvgStyled>
      </CustomArrow>
    ),
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
