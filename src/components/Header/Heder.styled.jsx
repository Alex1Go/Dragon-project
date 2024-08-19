import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { globalColor } from "../../styles/roots";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 48px;
  left: 0;
  z-index: 1000;
  width: 100%;
`;

export const Navigation = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1256px;
  height: 99px;
  align-items: center;
  justify-content: space-between;

  > Link {
  }
  > div {
    display: flex;
    align-items: center;
    gap: 48px;
  }
`;
export const Logo = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  color: ${globalColor.colorWhite};

  border: 1px solid ${globalColor.colorWhite};
  border-radius: 21px;
  padding: 8px 12px;
  width: 66px;
  height: 35px;
`;
export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  color: ${globalColor.colorWhite};

  &.active {
    color: #a2d6ee;
  }
`;
export const Contactbtn = styled.button`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  color: ${globalColor.colorWhite};

  border: 1px solid ${globalColor.colorWhite};
  border-radius: 21px;
  padding: 8px 10px;
  width: 142px;
  height: 35px;
  background-color: transparent;
`;
