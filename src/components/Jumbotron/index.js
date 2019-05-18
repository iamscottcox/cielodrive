import React from 'react';
import styled from 'styled-components';
import {FaChevronDown} from 'react-icons/fa';

import { Logo } from '../Logo';

const JumbtronLogo = styled(Logo)`
  height: 75vmin;
  opacity: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -100;
`;

const StyledJumbotron = styled.section`
  height: 100vh;
  font-family: Ailerons, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(15px + 2vmin);
  color: #333;
  position: relative;
  
  p {
    font-family: 'Staatliches', sans-serif;
  }
`;

const StyledChevron = styled.a`
  position: absolute;
  margin: auto;
  bottom: 10px;
`;

export const Jumbotron = () => (
  <StyledJumbotron>
    <JumbtronLogo />
    <StyledChevron href="#album">
      <FaChevronDown color='#333' />
    </StyledChevron>
  </StyledJumbotron>
);
