import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  color: black;
  background-color: blue;
  height: 220px;
  width: 220px;
`;

export default function Card (props) {
  return (
    <StyledCard>
      This is Awesome Card
    </StyledCard>
  );
};

