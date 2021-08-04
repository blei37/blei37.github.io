//default imports
import React from "react";
import styled from "styled-components";

//import components
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import AboutSection from "./components/AboutSection";

//import assets
import appBackground2 from "./assets/appBackground2.jpg";

function App() {
  //styles
  const AppContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${appBackground2});
    background-size: 100% 100%;
  `;

  return (
    <AppContainer>
      <NavBar />
      <AboutSection />
      <SearchBar />
    </AppContainer>
  );
}

export default App;
