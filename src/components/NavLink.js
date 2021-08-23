//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";
import { useHistory } from "react-router-dom";

function NavLink(props) {
  //styles
  const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 20px;
    font-family: "Roboto Mono", monospace;

    display: flex;
    justify-content: space-evenly;
    text-decoration: none;

    transition-duration: 0.8s;
    color: black;

    :hover {
      cursor: pointer;
      background-color: #15194f;
      color: white;
    }
  `;

  //functions
  let history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: `/${props.name.toLowerCase()}`,
    });
  };

  return <MainContainer onClick={handleClick}>{props.name}</MainContainer>;
}

export default NavLink;
