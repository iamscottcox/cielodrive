import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ACCENT_COLOUR_BRIGHT} from "../../../constants/styles/colours";

export const MusicLinksWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 200px;
  margin: 0 auto;
  padding: 0 0 2em;
`;

export const MusicLinks = () => (
    <MusicLinksWrapper>
      <li><a href="https://itunes.apple.com/gb/album/ruins/1463260122"><FontAwesomeIcon icon={['fab', 'itunes']} size="3x" color={ACCENT_COLOUR_BRIGHT}/></a></li>
      <li><a href="https://www.youtube.com/user/scoutkillers"><FontAwesomeIcon icon={['fab', 'youtube']} size="3x" color={ACCENT_COLOUR_BRIGHT}/></a></li>
      <li><a href="https://open.spotify.com/artist/5ktJwzGswi9ZGB5FZDBFdI"><FontAwesomeIcon icon={['fab', 'spotify']} size="3x" color={ACCENT_COLOUR_BRIGHT}/></a></li>
    </MusicLinksWrapper>
);
