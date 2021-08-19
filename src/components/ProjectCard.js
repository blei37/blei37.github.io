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
    font-size: 2em;
    margin: 0.2em;
    margin-bottom: 0.5em;
    font-style: italic;
    color: black;
  `;

  const InfoContainer = styled.div`
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 1em;
  `;

  const ImageContainer = styled.div`
    width: 40%;
    height: 90%;
    background-image: url(${image});
    background-size: 100% 100%;
    border-radius: 1em;
    margin: auto;
  `;

  const DescriptionContainer = styled.div`
    width: 50%;
    font-size: 1em;
    color: #f6e7e6;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  `;

  const ReflectionContainer = styled.div`
    font-size: 1em;
    margin: 0.5em;
    color: white;
    width: 100%;
    height: 20%;
    text-align: left;
  `;

  const ReflectionTitle = styled.div`
    font-size: 1.5em;
    margin: 0.3em;
    font-style: italic;
  `;
  const ReflectionDescription = styled.div``;

  return (
    <MainContainer>
      <InfoContainer>
        <ImageContainer />
        <DescriptionContainer>
          <TitleContainer>{title}</TitleContainer>
          <div>{description}</div>
        </DescriptionContainer>
      </InfoContainer>
      <ReflectionContainer>
        <ReflectionTitle>Reflection</ReflectionTitle>
        <ReflectionDescription>{reflection}</ReflectionDescription>
      </ReflectionContainer>
    </MainContainer>
  );
}

export default ProjectCard;
