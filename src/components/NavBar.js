//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";

//import assets
import profilePic from "../assets/profilePic.png";

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
  `;
  const RightContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    align-items: center;
  `;

  return (
    <MainContainer>
      <LeftContainer>BL</LeftContainer>
      <RightContainer>
        <div>ABOUT</div>
        <div>PROJECTS</div>
        <div>BLOGS</div>
        <div>CONTACT</div>
      </RightContainer>
    </MainContainer>
  );
}

export default NavBar;
