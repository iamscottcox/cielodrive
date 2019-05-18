import React from 'react';
import styled from 'styled-components';

// keys
import {ACCESS_TOKEN} from "../../keys";

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
  flex-flow: row wrap;
`;

export default class Pictures extends React.Component {
  componentDidMount() {
    const url = `https://api.instagram.com/v1/users/self/?access_token=${ACCESS_TOKEN}`;
    const request = fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json)
      })
  }

  render() {
    return (
      <StyledPictures>
        {pictures.map((pictureSrc) => (
          <img src={pictureSrc} alt={pictureSrc} />
        ))}
      </StyledPictures>
    );
  }
}

Pictures.propTypes = {};
