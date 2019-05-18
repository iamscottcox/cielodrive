import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpotify,
  faYoutube,
  faItunes
} from "@fortawesome/free-brands-svg-icons";

// components
import { Header } from "./components/Header";
import { Jumbotron } from "./components/Jumbotron";
import { Video } from "./components/Video";
import Pictures from "./components/Pictures";
import { Album } from "./components/Album";
import {MusicEmbeds} from "./components/MusicEmbeds";
import {News} from "./components/News";

library.add(faSpotify, faYoutube, faItunes);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Lato', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Staatliches', sans-serif;
  }
  
  h1 {
    font-size: 3em;
  }
  
  h2 {
    font-size: 2.5em;
  }
  
  h3 {
    font-size: 2em;
  }
  
  h4 {
    font-size: 1.5em;
  }
 
`;

const StyledContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <section className="App">
        <GlobalStyle />
        <Header />
        <StyledContent>
          <Jumbotron />
          <Album />
          <MusicEmbeds/>
          <Video />
          {/*<Pictures />*/}
          <News/>
        </StyledContent>
      </section>
    );
  }
}

export default App;
