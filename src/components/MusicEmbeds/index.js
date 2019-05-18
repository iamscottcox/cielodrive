import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { BOX_SHADOW } from "../../constants/styles/box-shadow";

const StyledMusicEmbeds = styled.div`
  .music-embeds-content {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  iframe {
    margin: 1em;
    box-shadow: ${BOX_SHADOW};
  }
`;

export const MusicEmbeds = () => (
  <StyledMusicEmbeds>
    <div className="music-embeds-content">
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="450"
        style={{
          maxWidth: "400px",
          height: "380px",
          overflow: "hidden",
          background: "transparent"
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/gb/album/ruins/1463260122"
      />
      <iframe
        src="https://open.spotify.com/embed/album/6q2yFwMIgkqtEFrjTReTXk"
        maxWidth="400"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </div>
  </StyledMusicEmbeds>
);
