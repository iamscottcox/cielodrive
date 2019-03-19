import React from 'react';
import styled from 'styled-components';

const pictures = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

export const StyledPictures = styled.div`
  display: flex;
  justify-content: center;
`;

export const Pictures = () => (
  <StyledPictures>
    {pictures.map((pictureSrc) => (
      <img src={pictureSrc} alt={pictureSrc} />
    ))}
  </StyledPictures>
);
