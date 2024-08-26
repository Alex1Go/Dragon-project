import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  box-sizing: border-box;
  padding-top: 100px;
  text-align: center;
`;

export const ImageSlide = styled.div`
  position: relative;
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 1440px;
  height: 834px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 1440px;
  height: 834px;
  object-fit: cover;
`;

export const Infobox = styled.div`
  position: absolute;
  top: 436px;
  left: 60px;
  width: 600px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: left;
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 171%;
  text-align: left;
`;
