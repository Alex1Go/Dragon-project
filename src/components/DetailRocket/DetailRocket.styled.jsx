import styled from 'styled-components';
import fon_2 from '../../assets/fon_2.png';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 64px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
export const Rocket = styled.div`
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  padding: 24px;
  width: 1321px;
  height: 505px;
  gap: 24px;
`;
export const Img = styled.img`
  background-image: url(${fon_2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  width: 791px;
  height: 457px;
`;

export const InfoBox = styled.div``;
export const Title2 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0px 0px 8px 0px;
  width: 458px;
  height: 25px;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`;
export const Data = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`;
