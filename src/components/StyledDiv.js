import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  text-align: center;
  background-color: black;
  background-image: radial-gradient(
      white,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 10px
    ),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 5px),
    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 10px),
    radial-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 2px,
      transparent 5px
    );
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
`;

export default StyledDiv;
