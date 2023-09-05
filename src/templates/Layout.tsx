import React from "react";
import styled from "styled-components";
import Lnb from "../components/Lnb";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Wrapper>
      <Lnb />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
  display: flex;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export default Layout;
