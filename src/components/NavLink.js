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
    margin: auto;
    display: flex;
    justify-content: space-evenly;

    :hover {
      cursor: pointer;
    }
  `;

  //functions
  let history = useHistory();
  const handleClick = () => {
    console.log(`IN HANDLE CLICK FOR ${props.name}`);
    history.push({
      pathname: `/${props.name.toLowerCase()}`,
    });
  };

  return <MainContainer onClick={handleClick}>{props.name}</MainContainer>;
}

export default NavLink;
