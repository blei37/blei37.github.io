//default imports
import React, { useState } from "react";

//import components
import Card from "../components/Card";

//import styles
import styled from "styled-components";
import "../App.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//import project images
import campfire from "../assets/projects/campfire.png";
import everwing from "../assets/projects/everwing.jpg";

function Projects() {
  //styles
  const MainContainer = styled.div`
    font-size: 35px;
    width: 80%;
    height: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const ArrowContainer = styled.div`
    margin: auto;
    color: white;
    transition: 1s;

    :hover {
      cursor: pointer;
      transform: scale(1.5);
      color: blue;
    }
  `;
  const InfoContainer = styled.div`
    width: 80%;
  `;

  //content
  const projects = {
    Campfire: {
      description:
        "Me and 2 other friends created this project as part of the Web Lab competition this IAP. When coming up with ideas, we wanted to create something that will bring people together feel connected during a time when we all may feel isolated. We finalized our idea to be a storytelling game in a hot potato manner, where whenever someone receives a potato, they create a new sentence (while being burned by a hot potato). I worked on all aspects of the web app from front-end React to storing information on MongoDB to allowing live synchronization between clients using web sockets. We encountered a lot of obstacles along the way, but through active communication, we were able to create a very cool app that we play with friends and share with others! ",
      reflection:
        "The purpose of this project is increase human interaction in a time when many may feel isolated. Be it in amongst collegues at work work peers in school, I hope to increase the fluidity of communication between people. ",
      image: campfire,
    },
    "Hardware Everwing": {
      description:
        "This was a project I completed during my time at MIT's MOSTEC Summer Program. It is a third person shooter game built using Pygame and a Rasberry Pi. The controls consisted of phototransistors, accelerometers, buttons and LED lights. Players have to use the controls to eat as much food as possible while shooting down the enemies. This project revealed to me the beautiful harmony between software and hardware.",
      reflection:
        "In terms of accessiblity, this game didn't require internet connection for others to play. It was hardware controlled meaning those who are not familiar with operating with a playstation style controller would have a difficult time with the game",
      image: everwing,
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [titles, setTitles] = useState(Object.keys(projects));

  const arrowClick = (direction) => {
    let newIndex;
    switch (direction) {
      case "left":
        newIndex = currentIndex === 0 ? titles.length - 1 : currentIndex - 1;
        break;
      case "right":
        newIndex = currentIndex === titles.length - 1 ? 0 : currentIndex + 1;
        break;
    }
    setCurrentIndex(newIndex);
    console.log(`New Index: ${newIndex}`);
  };

  return (
    <MainContainer>
      <ArrowContainer onClick={() => arrowClick("left")}>
        <ArrowBackIosIcon />
      </ArrowContainer>
      <InfoContainer>
        <Card
          title={titles[currentIndex]}
          image={projects[titles[currentIndex]].image}
          description={projects[titles[currentIndex]].description}
          reflection={projects[titles[currentIndex]].reflection}
        />
      </InfoContainer>
      <ArrowContainer onClick={() => arrowClick("left")}>
        <ArrowForwardIosIcon />
      </ArrowContainer>
    </MainContainer>
  );
}

export default Projects;
