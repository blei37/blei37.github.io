//default imports
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

//import components
import NavLink from "./NavLink";

function NavBar() {
  //styles
  const MainContainer = styled.div`
    max-width: 1200px;
    margin: 0px auto;
    padding: 20px 10px 10px;
    display: flex;
    justify-content: space-evenly;
  `;
  const LeftContainer = styled.div`
    width: 300px;
    margin: auto;
    text-align: center;
    font-family: "Dancing Script", cursive;
    font-size: 45px;
    color: blue;
    letter-spacing: 7px;

    :hover {
      cursor: pointer;
    }
  `;

  const RightContainer = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    align-items: center;
  `;

  //functions
  let history = useHistory();
  const handleHome = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <MainContainer>
      <LeftContainer onClick={handleHome}>BL</LeftContainer>
      <RightContainer>
        <NavLink name="About" />
        <NavLink name="Projects" />
        <NavLink name="Blogs" />
      </RightContainer>
    </MainContainer>
  );
}

export default NavBar;
