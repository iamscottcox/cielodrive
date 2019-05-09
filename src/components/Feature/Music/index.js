import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MusicWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 200px;
  margin: 0 auto;
  padding: 0 0 2em;
`;

export const Music = () => (
    <MusicWrapper>
      <li><a href="https://www.youtube.com/user/scoutkillers"><FontAwesomeIcon icon={['fab', 'youtube']} size="3x" color={'#333'}/></a></li>
      <li><a href="https://open.spotify.com/artist/5ktJwzGswi9ZGB5FZDBFdI"><FontAwesomeIcon icon={['fab', 'spotify']} size="3x" color={'#333'}/></a></li>
      {/*<li><a href="#"><FontAwesomeIcon icon={['fab', 'itunes']} size="3x" color={'#333'}/></a></li>*/}
    </MusicWrapper>
);
