import sprite from '../assets/sprite.svg';
import PropTypes from 'prop-types';

const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'absolute',
        bottom: '0',
        [direction === 'left' ? 'left' : 'right']: '17px',
        zIndex: '1',
      }}
    >
      <svg
        style={{
          fill: 'white',
          width: '28px',
          height: '21px',
          transform: direction === 'right' ? 'rotate(180deg)' : 'none',
        }}
      >
        <use
          href={
            sprite +
            (direction === 'left' ? '#icon-Vector-8' : '#icon-Vector-8')
          }
        />
      </svg>
    </div>
  );
};
CustomArrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};
export default CustomArrow;
