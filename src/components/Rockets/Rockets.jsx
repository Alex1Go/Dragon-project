import { useEffect, useState } from 'react';
import RocketItem from '../RocketItem/RocketItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/operation';
import { selectDragons } from '../../redux/selector';
import { Title } from './Rockets.styled';
import sprite from '../../assets/sprite.svg';
import CustomArrow from '../../helpers/ArrowForRocket';

const RocketSlider = () => {
  const dispatch = useDispatch();
  const { items: rockets, status } = useSelector(selectDragons);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div style={{ marginTop: '55px', position: 'sticky' }}>
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

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading rockets.</div>;
  }

  return (
    <>
      <section style={{ paddingBottom: '100px' }}>
        <Title>Our Rockets</Title>
        <Slider {...settings}>
          {rockets.map((rocket) =>
            rocket.flickr_images.map((image, index) => (
              <RocketItem
                key={`${rocket.id}-${index}`}
                rocket={{ ...rocket, image }}
              />
            ))
          )}
        </Slider>
      </section>
    </>
  );
};

export default RocketSlider;
