//default imports
import React from "react";
import styled from "styled-components";

function SearchBar() {
  //styles
  const MainContainer = styled.div`
    font-size: 50px;
    width: 80%;
    height: 15%;
    margin: 1em auto;
    text-align: center;
    padding: 40px;

    input {
      width: 50%;
      margin-right: 10px;
      height: 2em;
    }

    button {
      height: 2em;
    }
  `;

  return (
    <MainContainer>
      <form action="/" method="get">
        <input type="text" id="search" placeholder="Type Here" name="s" />
        <button type="submit">Search</button>
      </form>
    </MainContainer>
  );
}

export default SearchBar;
