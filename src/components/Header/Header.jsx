import {
  Contactbtn,
  HeaderContainer,
  Logo,
  Navigation,
  StyledLink,
} from "./Heder.styled";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Navigation>
          <Logo to="/">LOGO</Logo>
          <div>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/about">ABOUT</StyledLink>
            <StyledLink to="/QA">QA</StyledLink>
            <StyledLink to="/contact form">CONTACT FORM</StyledLink>
          </div>
          <Contactbtn type="button">CONTACT FORM</Contactbtn>
        </Navigation>
      </HeaderContainer>
    </>
  );
};
export default Header;
