//default imports
import React, { useState } from "react";

//import components
import ProjectCard from "../components/ProjectCard";

//import styles
import styled from "styled-components";
import "../App.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//import project images
import campfire from "../assets/projects/campfire.png";
import everwing from "../assets/projects/everwing.jpg";
import tupleTunes from "../assets/projects/tupleTunes.png";

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
        "Campfire is a multiplayer hot potato story telling game that seeks to connect friends from all around the world.  The purpose of this game is to join creative minds together to create fun and interesting stories! At the start of the game, one player starts with a potato. They create a sentence and then they pass the potato onto the next person who adds onto the existing story and so on and and so forth. At the end, players will have created a game that they can share with others!",
      reflection:
        "The purpose of this project is to increase human interaction during a time when many may feel isolated or alone. I hope this project can increase the fluidity of communication between peers at school, collegues at work or just friends getting to know each other for the first time. Being confident in one's thoughts and not being afraid to share them is so important in every setting and I hope that this game helps take that vision one step closer to reality. In terms of platform, I decided to go with a web app because the main interaction with this game is through typing on the keyboard. This will leave out those who prefer games to be on their phones or tablets. One thing I could have improved on is have a language selector for the games, allowing those who know the same language to put in the same room. To increase accessibility, I hope to one day add a microphone dictation feature to the game, allowing those who have difficulty typing to write their part of the story through speaking words. All in all, I believe this a great game for any group of people who want to know each other better - be it in workplace, school or any other setting. Through this project, I hope I reflected my values for communication, human interactivity and equality. Each person has a voice to contribute to the overall story.",
      image: campfire,
    },
    "Hardware Everwing": {
      description:
        "Hardware Everwing is a project I completed during my time at MIT's MOSTEC Summer Program under the EECS department. It features a third person shooter game built using Pygame and a Rasberry Pi. The controls consisted of phototransistors, accelerometers, buttons and LED lights. Players have to use the controls to eat as much food as possible while shooting down the enemies. This project highlights the beautiful harmony between software and hardware.",
      reflection:
        "The purpose of this project is to add a twist to conventional console style games through designing my own controller. It aims to be a fun game for others to play to reduce stress, compete with friends and most importantly, have fun! In terms of accessibility, this application doesn't require internet connection, allowing those with bad/no internet connection to access the game. Nevertheless, the game features a lot more controls that will exhibit a learnign curve for those who are not familiar with console games. Instead of the traditional keyboard style pc games or controller console games, this game has buttons attached to a Rasberry Pi breadboard containing an accelerometer to monitor movement controls. I believe that the hardware aspect of it adds a new dimension to this game, that other platforms don't offer. There are 3 buttons on the breadboard for changing position, compared to the tens of keys on a traditional keyboard. making it easier for those relatively new to computers to play a game they can enjoy. The game does feature a leaderboard displaying the top players. I do hope to give options in the future for players to opt in/out of the leaderboard rankings. Competition is fun but I much rather value equality and for all players to feel included in the space. ",
      image: everwing,
    },
    "Tuple Tunes": {
      description:
        "Tuple Tunes is a project I created with 4 other friends for our Embedded Systems Project. The front end controls consisted of joysticks, buttons, microphones, LEDs, LCDs, speakers all connected to a ESP 32 microcontroller. The purpose of this project is to create a game for people to create music together! Once a game is created by a host, others can join the same game using the game code. Inside the game, players can put together notes to create part of a or a full measure. The players add on and at the end, the players will have created a song together!",
      reflection:
        "This game was meant for those who are new to music to have a relatively low barrier of entry to creating music! It allows for friends to come together to create songs. I always strive to make a game that is accessible and inclusive. With the speaker and the joystick to toggle between notes, players can listen and learn which notes correspond to which sounds. I believe we did a good job in designing an easy to play to learn music! I really loved this project because it combined by two previous projects, Campfire and Hardware Everwing, combining the communication and creativity aspect of Campfire with the hardware component of Hardware Everwing. This game requries internet access between all users in order for synchronization putting those without good internet access at a disadvantage. Nevertheless, players can play the game by themselves to learn more about music. From the perspective of one that is new to music, I think this game serves as a great and fun learning platform. From the persepctive of one that is familiar with music theory, this game serves to elicit there musical creativity to craft an amazing song. From the perspective of any other stakeholder, this is a great medium to have fun and play a song-creation game with other peers, collegues or friends. My values of inclusivity, equality, passion and creativity are embodied in this project.",
      image: tupleTunes,
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
  };

  return (
    <MainContainer>
      <ArrowContainer onClick={() => arrowClick("left")}>
        <ArrowBackIosIcon />
      </ArrowContainer>
      <InfoContainer>
        <ProjectCard
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
