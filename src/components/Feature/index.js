import React from "react";
import styled from "styled-components";

// components
import { Music } from "./Music";
// constants
import { ACCENT_COLOUR_BRIGHT } from "../../constants/colours";

export const StyledFeature = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 0.5em;
    font-size: 3em;
    border-bottom: 3px solid ${ACCENT_COLOUR_BRIGHT};
  }

  h2 {
    padding: 1em;
    font-size: 2em;
  }

  iframe {
    height: 65vh;
    width: 65%;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 320px;
    }
  }
`;

export const Feature = () => (
  <StyledFeature id="feature">
    <h1>Rise</h1>
    <iframe
      title="Video for Rise by Cielo Drive"
      src="https://www.youtube.com/embed/97lVKpkUgSc"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h2>Out Now</h2>
    <Music />
  </StyledFeature>
);
