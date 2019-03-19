import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MusicWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  max-width: 300px;
  margin: 0 auto;
  padding: 1em 0;
`;

export const Music = () => (
    <MusicWrapper>
      <li><a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} size="3x" color={'#333'}/></a></li>
      <li><a href="#"><FontAwesomeIcon icon={['fab', 'spotify']} size="3x" color={'#333'}/></a></li>
      <li><a href="#"><FontAwesomeIcon icon={['fab', 'itunes']} size="3x" color={'#333'}/></a></li>
    </MusicWrapper>
);
