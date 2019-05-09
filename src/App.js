import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify, faYoutube, faItunes } from '@fortawesome/free-brands-svg-icons'

// components
import { Header } from "./components/Header";
import { Jumbotron } from "./components/Jumbotron";
import { Music } from "./components/Music";
// import {Pictures} from "./components/Pictures";
import {Feature} from "./components/Feature";

library.add(faSpotify, faYoutube, faItunes);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: Ailerons;
    src: url('/public/fonts/Ailerons-Typeface.otf');
  }
  
  body {
    font-family: 'Lato', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Staatliches', sans-serif;
  }
 
`;

class App extends Component {
  render() {
    return (
      <section className="App">
        <GlobalStyle/>
        <Header/>
        <Jumbotron />
        <Feature/>
        <Music />
        {/*<Pictures/>*/}
      </section>
    );
  }
}

export default App;
