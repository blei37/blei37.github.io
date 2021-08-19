//default imports
import React, { useState } from "react";

//import components
import BlogCard from "../components/BlogCard";

//import styles
import styled from "styled-components";
import "../App.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//import blog images
import nba from "../assets/blogs/nba.jpg";
import future from "../assets/blogs/future.jpg";
import office from "../assets/blogs/office.jpg";

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
  const blogs = {
    "More Than A Sport": {
      description:
        "I had always loved basketball. I began playing basketball in the middle school. What was originally just a small hobby grew into a strong passion. Each day after school I would come back from school and go straight to the basketball court. I eventually decided to go my local gyms. There, people played pickup games. Even though no one really explicity said it, I always noticed I was a bit different - I was the only asian boy on the court. Whenever we had to choose teams, I was always the last one chosen. The issue of inclusivity in sports wasn't just apprarent in my local gyms, this has been an issue for a very very long time. Ever since the dawn of sports coverage, news outlets and magazines always mention the heroics of white athletes, but rarely do they do the African Americans counterparts and almost certaintly never Asian Americans. In the 1970s, it wasn't your athleticsm, awards or skill that got you the cover story of the lastest Sports Illustrated Magazine, but rather the color of skin. With the invisibility of non-white athletes as came stereotypes that were attached to the color of one's skin. For much of history, African Americans have been viewed as ignorant, lazy and animal like. Asians were viewed as unathletic and weak. Even though this issue of systemic racism has been improving, there are still many gaps to be filled to this day. I hope that one day I can walk on a basketball court and not have to worry about the color of my skin.",
      image: nba,
    },
    "Workplace Ethics": {
      description:
        "In the workplace today, employees and workers are primed to orders from their higher ups without giving much of their opinion. I believe that the workplace should move away this separatist structure because doing so can lead to detrimental effects. I want to bring up an example at Uber, which was highlighted by Julie Bort in her article: 'Inside Uber before Its Self-Driving Car Killed a Pedestrian: Sources Describe Infighting, 'Perverse' Incentives, and Questionable Decisions'. In trying to please their supervisors, the engineers on the self driving car team decided to push their work into production despite having doubts that there could be failure. This then led to an Uber self driving car to kill an innocent pedestrian. This could have been prevented if the engineers and the supervisors established good relations and there was fluid communication within the team. I believe that everyone has a voice and we should not be afraid to express our views in the workplace. In the workplace, there are often the notions of moral responsibility and professional responsibility as outlined by Wiley Blackwell in her article, 'Ethics, Technology, and Engineering'. Admist these responsibiities, the relationship structure falls somewhere between the two extremes of separatism and paternalism. I believe that the ideal appraoch is to adopt a specific framework but rather establish good communication channels between members of the team in all directions. Once we do that, we are more willing to voice our own opinions that stem from our own values and beliefs.",
      image: office,
    },
    "Moving Forward": {
      description:
        "There is not a one size fits all approach to every situation. The word best to subjective and has a different semantic meaning from person to person. Moving foward in my work and personal life, I know that I will inevitably encounter scenarios where I have to make tough decisions - ones that don't have a perfect solution. Nevertheless, I do know that I better equipped now to tackle those issues. Through experiential ethics, I have developed a toolset with which I can apply to every situation. I have learned how to view decisions from the perspective of different stakeholders as well as have a well defined set of principles and core values with which I follow. There will always be issues of privacy, the rights of individuals vs organizations, equality, and various morals and ethical issues that will undoubely arise in the future. There is no easy answer, but I believe tackling these issues headon and discussing it amongst ourselves is much better than burying these issues in the dust. In the work that I do, I try to analyze the values that I have promoted and others that I have not. By asking myself questions such as, Did I embody my moral and ethical values in the process of the project? What will be the public response to my project, from the perspective of each stakeholder? What could I have done better to better serve the common good?, I believe I will be better equipped move onto my future.",
      image: future,
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [titles, setTitles] = useState(Object.keys(blogs));

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
        <BlogCard
          title={titles[currentIndex]}
          image={blogs[titles[currentIndex]].image}
          description={blogs[titles[currentIndex]].description}
        />
      </InfoContainer>
      <ArrowContainer onClick={() => arrowClick("left")}>
        <ArrowForwardIosIcon />
      </ArrowContainer>
    </MainContainer>
  );
}

export default Projects;
