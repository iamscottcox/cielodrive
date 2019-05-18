import React from 'react';
import propTypes from 'prop-types';
import styled from "styled-components";

import RuinsTour from "../../images/tours/ruins_tour.jpg";
import {BOX_SHADOW} from "../../constants/styles/box-shadow";
import {BORDER_BOTTOM_ACCENT_COLOUR_BRIGHT} from "../../constants/styles/borders";

const StyledNews = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center
  align-items: center
  padding-bottom: 5em;
  
  h1 {
    display: inline-block;
    margin-bottom: 0.5em;
    border-bottom: ${BORDER_BOTTOM_ACCENT_COLOUR_BRIGHT}
  }

  img {
    auto: 70%;
    height: 70vh;
    margin: 0 auto;
    box-shadow: ${BOX_SHADOW}
  }
`;

export const News = () => (
  <StyledNews>
    <h1>See us Live</h1>
    <img src={RuinsTour} alt=""/>
  </StyledNews>
);
