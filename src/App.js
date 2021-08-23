//default imports
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import components
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

//import assets
import appBackground from "./assets/appBackground.jpg";
import cityLine from "./assets/cityLine.jpg";
import mountainRange from "./assets/mountainRange.jpg";

function App() {
  //styles
  const AppContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: black;
    background-image: url(${mountainRange});
    background-size: 100% 100%;
  `;

  return (
    <BrowserRouter>
      <AppContainer>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
