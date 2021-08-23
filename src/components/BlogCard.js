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
    font-family: "Poppins", sans-serif;
  `;

  const TitleContainer = styled.div`
    font-weight: 200;
    font-size: 40px;
    margin: 0.5em auto;
    color: #39375b;
    width: 50%;
  `;

  const InfoContainer = styled.div`
    margin: 30px;
    height: 400px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;

  const ImageContainer = styled.div`
    width: 500px;
    height: 400px;
    margin: auto;
    background-image: url(${image});
    background-size: 100% 100%;
    border-radius: 15px;
  `;

  const DescriptionContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: auto;
    overflow-y: scroll;
    padding: 0 30px;

    font-size: 18px;
    color: #f6e7e6;
    text-align: left;
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
