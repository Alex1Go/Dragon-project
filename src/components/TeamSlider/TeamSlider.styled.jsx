import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`;
export const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;
export const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
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
  ${(props) => (props.direction === 'prev' ? 'left: 20px;' : 'right: 20px;')}
  transform: translateY(-50%);
  background-color: #ffffff;
  width: 125px;
  height: 126px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fff;
  }

  &::before {
    content: '${(props) => (props.direction === 'prev' ? '‹' : '›')}';
    font-size: 24px;
    color: #333;
  }
`;

// export const DotsContainer = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   display: flex;
//   transform: translateX(-50%);
// `;

// export const Dot = styled.button`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background-color: ${(props) => (props.active ? '#fff' : '#888')};
//   border: none;
//   margin: 0 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// `;
