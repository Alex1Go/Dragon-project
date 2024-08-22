import styled from 'styled-components';

export const Itembox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  padding: 24px;
  width: 427px;
  height: 553px;
`;

export const Img = styled.img`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  width: 379px;
  height: 219px;
  background: rgba(255, 255, 255, 0.05);
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  margin: 24px 0;
`;
export const Infobox = styled.div`
  height: 210px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0px 0px 8px 0px;
  height: 25px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Data = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`;
