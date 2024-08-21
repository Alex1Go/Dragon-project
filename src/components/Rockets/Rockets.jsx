import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RocketItem from '../RocketItem/RocketItem';

const RocketSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button>Next</button>,
    prevArrow: <button>Prev</button>,
  };
  return (
    <>
      <h2>Our Rockets</h2>
      <Slider {...settings}>
        {/* {rockets.map((rocket) => (
          <div key={rocket.id}> */}
        <RocketItem />
        {/* </div>
        ))} */}
      </Slider>
    </>
  );
};

export default RocketSlider;

// import { useEffect } from 'react';
// import Slider from 'react-slick';
// import { useSelector, useDispatch } from 'react-redux';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import RocketItem from '../RocketItem/RocketItem';
// import { fetchDragons } from '../../redux/operation';

// const RocketSlider = () => {
//   const dispatch = useDispatch();
//   const rockets = useSelector((state) => state.dragons.items);
//   const status = useSelector((state) => state.dragons.status);

//   useEffect(() => {
//     dispatch(fetchDragons());
//   }, [dispatch]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <button>Next</button>,
//     prevArrow: <button>Prev</button>,
//   };

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <h2>Our Rockets</h2>
//       <Slider {...settings}>
//         {rockets.map((rocket) => (
//           <div key={rocket.id}>
//             <RocketItem rocket={rocket} />
//           </div>
//         ))}
//       </Slider>
//     </>
//   );
// };

// export default RocketSlider;
