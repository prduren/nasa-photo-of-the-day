import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: lightyellow;
`;

function Footer() {
    return (
        <StyledH3>The information on this page was retrieved from NASA's Open API database at https://api.nasa.gov/</StyledH3>
    );
}

export default Footer;