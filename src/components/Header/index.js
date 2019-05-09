import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 1em;
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  
  ul {
    display: flex;
    justify-content: space-around;
    
    li {
      list-style: none;
    
      a {
        color: #333;
        text-decoration: none;
        font-family: "Staatliches", cursive;
      } 
    }
  }
`;

export const Header = () => (
  <StyledHeader>
    <ul>
      <li><a href="https://www.facebook.com/cielodriveuk">Facebook</a></li>
      <li><a href="https://www.instagram.com/cielodrive_uk">Instagram</a></li>
      <li><a href="https://twitter.com/CIELODRIVEUK">Twitter</a></li>
    </ul>
  </StyledHeader>
);

export default Header;
