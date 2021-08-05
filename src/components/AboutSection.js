//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";

//import assets
import profilePic from "../assets/profilePic.png";

function AboutSection() {
  //styles
  const MainContainer = styled.div`
    width: 80%;
    height: 50%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
  `;

  const LeftContainer = styled.div`
    width: 50%;
    margin: auto;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 25px;
  `;

  const Title = styled.div`
    font-size: 50px;
    text-align: left;
  `;

  const RightContainer = styled.div`
    width: 30%;
    background-image: url(${profilePic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;

  //constants
  const description = (
    <div>
      I'm Brandon - a software engineer, MIT student, and a basketball player,
      and youtuber! NEW EDIT!
    </div>
  );

  return (
    <MainContainer>
      <LeftContainer>
        <Title>Hey Friends! -</Title>
        {description}
      </LeftContainer>
      <RightContainer></RightContainer>
    </MainContainer>
  );
}

export default AboutSection;
