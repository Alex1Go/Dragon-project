
import { useEffect } from 'react';
import RocketItem from '../RocketItem/RocketItem';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/operation';
import { selectDragons } from '../../redux/selector';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Title } from './Rockets.styled';

const RocketSlider = () => {
  const dispatch = useDispatch();
  const { items: rockets, status } = useSelector(selectDragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
