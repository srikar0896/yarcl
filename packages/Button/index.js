import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  background: purple;
  color: white;
`;

export default (props) => {
  return (
    <StyledButton>
      Click me
    </StyledButton>
  )
};
