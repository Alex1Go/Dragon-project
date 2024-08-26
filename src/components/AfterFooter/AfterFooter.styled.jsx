import styled from 'styled-components';
import fon from '../../assets/fon.jpg';

export const Box = styled.div`
  background-image: url(${fon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  text-transform: uppercase;
  margin-bottom: 24px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
`;
