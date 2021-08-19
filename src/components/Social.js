//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";

function Social({ link, children }) {
  //styles
  const MainContainer = styled.div`
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 1em;
    text-decoration: underline;
    color: white;
    transition: 0.5s;

    :hover {
      cursor: pointer;
      transform: scale(1.15);
    }
  `;

  const handleClick = () => {
    window.location = link;
  };

  return <MainContainer onClick={handleClick}>{children}</MainContainer>;
}

export default Social;
