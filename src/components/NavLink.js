//default imports
import React from "react";
import styled from "styled-components";
import "../App.css";
import { useHistory } from "react-router-dom";

function NavLink(props) {
  //styles
  const MainContainer = styled.div`
    width: 80%;
    height: 50%;
    margin: 20px;
    display: flex;
    justify-content: space-evenly;
    text-decoration: underline;
    padding: 10px;
    transition: 0.8s;
    border-radius: 15%;

    :hover {
      cursor: pointer;
      background-color: #15194f;
      color: white;
      text-decoration: none;
      transform: scale(1.1);
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
