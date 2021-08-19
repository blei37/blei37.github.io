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
    width: 80%;
    font-size: 20px;
    height: 15%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
  `;
  const LeftContainer = styled.div`
    width: 40%;
    margin: auto;
    text-align: center;
    font-family: "Dancing Script", cursive;
    font-size: 2em;
    color: purple;
    letter-spacing: 5px;

    :hover {
      cursor: pointer;
    }
  `;

  const RightContainer = styled.div`
    width: 45%;
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
        {/* <NavLink name="Contact" /> */}
      </RightContainer>
    </MainContainer>
  );
}

export default NavBar;
