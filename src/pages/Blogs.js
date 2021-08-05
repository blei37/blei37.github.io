//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";

function Blogs() {
  //styles
  const MainContainer = styled.div`
    font-size: 35px;
    width: 80%;
    height: 80%;
    margin: auto;
  `;

  const InfoContainer = styled.div`
    width: 50%;
    margin: auto;
    text-align: left;
    font-family: "Poppins", sans-serif;
  `;

  const DescriptionContainer = styled.div`
    font-size: 0.5em;
  `;

  const Title = styled.div`
    font-size: 1em;
    text-align: left;
  `;

  return (
    <MainContainer>
      <InfoContainer>
        <Title>Blogs</Title>
        <DescriptionContainer>Opening Soon!</DescriptionContainer>
      </InfoContainer>
    </MainContainer>
  );
}

export default Blogs;
