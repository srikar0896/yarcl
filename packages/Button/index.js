import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  background: purple;
  color: white;
`;

function Button (props) {
  return (
    <StyledButton>
      Click me
    </StyledButton>
  )
};

module.exports = Button;
