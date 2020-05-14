import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <h1>NASA's Astronomy Photo of the Day!</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 5rem;
    text-align: center;
  }
`;

export default Header;
