//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";

//import assets
import campusPic from "../assets/campusPic.JPG";

function About() {
  //styles

  const MainContainer = styled.div`
    font-size: 35px;
    width: 100%;
    height: 80%;
    margin: auto;
    background: none;
    color: white;
  `;

  const InfoContainer = styled.div`
    width: 50%;
    height: 50%;
    margin: auto;
    margin-bottom: 2em;
    text-align: left;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: space-evenly;
    font-size: 0.5em;
  `;

  const DescriptionContainer = styled.div`
    width: 60%;
    margin: auto;
  `;

  const PictureContainer = styled.div`
    width: 30%;
    margin: 0;
    background-image: url(${campusPic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 10%;

    @media (max-width: 1150px) {
      background-image: none;
    }
  `;

  const ContainerTitle = styled.div`
    font-style: italic;
    margin-bottom: 0.5em;
    color: black;
    font-size: 1.3em;
  `;

  return (
    <MainContainer>
      <InfoContainer>
        <PictureContainer />
        <DescriptionContainer>
          <ContainerTitle>A Passion and Drive</ContainerTitle>I am studying
          Computer Science at MIT. I am particular intersted in Artificial
          Intelligence, Internet of Things and Cloud Computing. At MIT, I am
          immersed in an amazing community of like-minded individuals that want
          to use technology to better the world around us. Through my
          coursework, extracurriculars and outside experiences, I am always
          striving to intersect my passion for technology with my goal for
          social impact.
        </DescriptionContainer>
      </InfoContainer>
      <InfoContainer>
        I was raised in NYC by two loving parents. NYC is the known as the city
        that never sleeps and I absolutely love the hustle and bustle. In my
        free time, I love dancing, coding, hiking, running and playing
        basketball. Throughout my life, I have embodied multiple personalities -
        a son, a student, a learner, an athlete, a software engineer - yet the
        same core values and goals that make up who I am have remained the same.
        Be it in on the basketball court, at school or in the code that I write,
        I always strive for excellence, inclusivity, equality, honesty and love.
      </InfoContainer>
    </MainContainer>
  );
}

export default About;
