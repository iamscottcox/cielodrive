import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1em;
  background: rgba(255, 255, 255, 0.5);

  a {
    color: #333;
    text-decoration: none;
    font-family: "Staatliches", cursive;
  }
`;

export const Header = () => (
  <StyledHeader>
    <a href="https://www.facebook.com/cielodriveuk">Facebook</a>
    <a href="https://www.instagram.com/cielodrive_uk">Instagram</a>
    <a href="https://twitter.com/CIELODRIVEUK">Twitter</a>
  </StyledHeader>
);

export default Header;
