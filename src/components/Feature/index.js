import React from "react";
import styled from "styled-components";

export const StyledFeature = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    padding: 0.5em;
    font-size: 3em;
  }
  
  h2 {
    padding: 1em;
    font-size: 2em;
  }
  
  iframe {
    height: 65vh;
    width: 65%;
  }
`;

export const Feature = () => (
  <StyledFeature>
    <h1>Coming Soon</h1>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ic2tGBsZiwg"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h2>25th May 2019</h2>
  </StyledFeature>
);
