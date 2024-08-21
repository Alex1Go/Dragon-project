import styled from 'styled-components';
// import { globalColor } from "../../styles/roots";

export const Sliderconteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
`;

export const Slideric = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export const Slide = styled.div`
  flex: 1;
  margin: 0 10px;
  min-width: calc(100% / 3); /* Show 3 items at a time */
  box-sizing: border-box;
`;
export const Sliderbutton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;
