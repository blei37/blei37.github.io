//default imports
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

function BlogCard({ title, image, description }) {
  //styles
  const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    font-size: 20px;
    text-align: center;
  `;

  const TitleContainer = styled.div`
    font-weight: 200;
    font-size: 2.5em;
    margin: 0.5em auto;
    color: #39375b;
    border: 1px solid black;
    border-radius: 1em;
    width: 50%;
  `;

  const InfoContainer = styled.div`
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2em;
  `;

  const ImageContainer = styled.div`
    width: 45%;
    background-image: url(${image});
    background-size: 100% 100%;
    border-radius: 1em;
  `;

  const DescriptionContainer = styled.div`
    width: 50%;
    font-size: 1em;
    color: #f6e7e6;
    margin: auto;
  `;

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <InfoContainer>
        <ImageContainer />
        <DescriptionContainer>{description}</DescriptionContainer>
      </InfoContainer>
    </MainContainer>
  );
}

export default BlogCard;
