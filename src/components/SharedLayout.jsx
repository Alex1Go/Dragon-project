import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import GlobalStyles, { Container } from "../styles/GlobalStyles";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyles />
      <Container />
    </>
  );
};
export default SharedLayout;
