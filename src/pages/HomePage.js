//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";

//import assets
import profilePic from "../assets/profilePic.png";
import mountainRange from "../assets/mountainRange.jpg";

//import components
import Social from "../components/Social.js";

//import social icons
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

function HomePage() {
  //styles

  const MainContainer = styled.div`
    width: 80%;
    height: 80%;
    margin: 2em auto;
  `;

  const ContentContainer = styled.div`
    height: 60%;
    display: flex;
    justify-content: space-evenly;
    color: white;
  `;

  const ContactContainer = styled.div`
    margin: 3em auto;
    height: 20%;
    width: 30%;
    display: flex;
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
    border-radius: 10%;

    @media (max-width: 1150px) {
      background-image: none;
    }
  `;

  //constants
  const description = (
    <div>
      I'm Brandon - a software engineer, MIT student, and a basketball player.
    </div>
  );

  return (
    <MainContainer>
      <ContentContainer>
        <LeftContainer>
          <Title>Hey Friends! -</Title>
          {description}
        </LeftContainer>
        <RightContainer />
      </ContentContainer>
      <ContactContainer>
        <Social link="https://www.instagram.com/blei37/">
          <InstagramIcon fontSize="large" />
        </Social>
        <Social link="https://www.facebook.com/brandonlei37">
          <FacebookIcon fontSize="large" />
        </Social>
        <Social link="https://www.linkedin.com/in/brandonlei/">
          <LinkedInIcon fontSize="large" />
        </Social>
        <Social link="https://github.com/blei37">
          <GitHubIcon fontSize="large" />
        </Social>
        <Social link="mailto:siliang.lei@gmail.com">
          <EmailIcon fontSize="large" />
        </Social>
      </ContactContainer>
    </MainContainer>
  );
}

export default HomePage;
