//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";

//import assets
import campusPic from "../assets/campusPic.JPG";

function About() {
  //styles

  const MainContainer = styled.div`
    margin: 10px auto;
    width: 1200px;
    color: white;
  `;

  const InfoContainer = styled.div`
    width: 1000px;
    padding: 15px;
    margin: auto;

    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;

    display: flex;
    justify-content: space-evenly;
  `;

  const DescriptionContainer = styled.div`
    width: 500px;
    margin: auto;
  `;

  const PictureContainer = styled.div`
    width: 300px;
    height: 400px;
    background-image: url(${campusPic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 10%;
  `;

  const ContainerTitle = styled.div`
    font-style: italic;
    margin-bottom: 30px;
    color: black;
    font-size: 30px;
    font-weight: 600;
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
