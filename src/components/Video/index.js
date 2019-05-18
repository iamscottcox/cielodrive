import React from "react";
import styled from "styled-components";

// constants
import { BORDER_BOTTOM_ACCENT_COLOUR_BRIGHT} from "../../constants/styles/borders";
import {BOX_SHADOW} from "../../constants/styles/box-shadow";

export const StyledVideo = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5em 0;

  h1 {
    border-bottom: ${BORDER_BOTTOM_ACCENT_COLOUR_BRIGHT}
  }

  h2 {
    font-size: 2em;
    padding-top: 1em;
  }

  h4 {
    padding: 1em 0;
  }

  iframe {
    height: 70vh;
    width: 70%;
    // box-shadow: ${BOX_SHADOW}

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 320px;
    }
  }
`;

export const Video = () => (
  <StyledVideo id="video">
    <h1>Rise</h1>
    <h4>Music Video</h4>
    <iframe
      title="Video for Rise by Cielo Drive"
      src="https://www.youtube.com/embed/97lVKpkUgSc"
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      style={{
          boxShadow: BOX_SHADOW
      }}
      allowFullScreen
    />
    <h2>Out Now</h2>
  </StyledVideo>
);
