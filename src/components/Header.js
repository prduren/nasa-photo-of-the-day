import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [enabled, setEnabled] = useState(true);
  function handleClick() {
    setEnabled((current) => {
      return !current;
    });
  }
  return (
    <Wrapper enabled={enabled}>
      <h1>NASA's Astronomy Photo of the Day!</h1>
      <button onClick={handleClick}>Toggle Color!</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0rem;
    text-align: center;
    background-color: ${(props) =>
      props.enabled ? props.theme.colors.green : props.theme.colors.khaki};
  }
  button {
    padding: 1rem;
  }
`;

export default Header;
