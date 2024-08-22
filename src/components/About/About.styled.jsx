import styled from 'styled-components';
import space from '../../assets/space.jpg';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 32px;
`;
export const VideoBox = styled.div`
  background-image: url(${space});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  width: 1321px;
  height: 536px;
`;
