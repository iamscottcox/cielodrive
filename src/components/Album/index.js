import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Ruins from '../../images/album-artwork/ruins.png'
import {MusicLinks} from "./MusicLinks";
import {BORDER_BOTTOM_ACCENT_COLOUR_BRIGHT} from "../../constants/styles/borders";

const StyledAlbum = styled.div`
  display: flex;
  justify-content: space-around;
  
  max-width: 65%;
  margin: 0 auto;
  padding: 3em 0;
  
  .left-col {
    text-align: center;
    
    img {
      width: 300px
      height: 300px;
    }
  }
  
  .right-col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    
    h1 {
      border-bottom: ${BORDER_BOTTOM_ACCENT_COLOUR_BRIGHT}
      margin-bottom: 0.5em;
    }
    
    .right-col-text {
      padding: 1em 0;
      text-align: center;
    }
  }
`;

export const Album = props => (
  <StyledAlbum id="album">
    <div className="left-col">
      <img src={Ruins} alt="" />
    </div>
    <div className="right-col">
      <div className="right-col-text">
        <h1>Ruins</h1>
        <h4>Our debut album</h4>
        <h2>Out Now</h2>
      </div>
      <MusicLinks/>
    </div>
  </StyledAlbum>
);
