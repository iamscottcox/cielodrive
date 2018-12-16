import React, { Component } from "react";
import Logo from './images/CieloDriveLogo.png'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href="https://www.facebook.com/cielodriveuk">Facebook</a>
          <a href="https://www.instagram.com/cielodrive_uk">Instagram</a>
          <a href="https://twitter.com/CIELODRIVEUK">Twitter</a>
        </header>
        <section className="jumbotron">
          <img className="logo" src={Logo} alt="The Cielo Drive heart logo"/>
          <h1>Cielo Drive</h1>
          <p>Coming Soon</p>
        </section>
      </div>
    );
  }
}

export default App;
