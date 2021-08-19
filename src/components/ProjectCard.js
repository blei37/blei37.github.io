//default imports
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

function ProjectCard({ title, image, description, reflection }) {
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
    margin: 0.5em;
  `;

  const InfoContainer = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2em;
  `;

  const ImageContainer = styled.div`
    width: 40%;
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

  const ReflectionContainer = styled.div`
    font-size: 1em;
    margin: 0.5em;
    color: white;
  `;

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <InfoContainer>
        <ImageContainer />
        <DescriptionContainer>{description}</DescriptionContainer>
      </InfoContainer>
      <ReflectionContainer>{reflection}</ReflectionContainer>
    </MainContainer>
  );
}

export default ProjectCard;
