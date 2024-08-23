import styled from 'styled-components';
import space from '../../assets/space.jpg';
import { NavLink } from 'react-router-dom';

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
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VideoLink = styled(NavLink)``;

export const SvgBox = styled.div`
  border-radius: 100px;
  width: 178px;
  height: 178px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const SvgStyled = styled.svg`
  width: 87px;
  height: 87px;
  position: absolute;
  left: 60px;
`;
