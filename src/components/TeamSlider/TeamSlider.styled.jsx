import styled from 'styled-components';
import { globalColor } from '../../styles/roots';

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 874px;
  overflow: hidden;
`;
export const SlidesWrapper = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;
export const Slide = styled.div`
  min-width: 423px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const ImgBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  padding: 32px 0px;
  max-width: 423px;
  height: 551px;
`;
export const Img = styled.img`
  border-radius: 40px;
  width: 100%;
  height: 423px;
`;

export const Role = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin: 12px 0 4px 0;
`;

export const Name = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
  text-transform: uppercase;
  text-align: center;
`;

export const NavButton = styled.button`
  position: absolute;
  bottom: 0;
  ${(props) => (props.direction === 'prev' ? 'left: 0;' : 'right: 1059px;')};
  background-color: #ffffff;
  width: 125px;
  height: 126px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
  text-align: center;

  &:hover {
    background-color: rgba(211, 208, 208, 0.5);
  }

  /* &::before {
    content: '${(props) => (props.direction === 'prev' ? '‹' : '›')}';
    font-size: 65px;
    color: #333;
  } */
`;
export const SvgStyled = styled.svg`
  margin: auto;
  fill: ${globalColor.colorBlack};
  width: 57px;
  text-align: center;
`;
