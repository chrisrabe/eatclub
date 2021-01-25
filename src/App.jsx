import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { getPulsateFrames } from 'utils/animation';

const pulsate = getPulsateFrames(1, 1.05);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledButton = styled(Button)`
  padding: 50px;
  font-weight: bold;
  font-size: 25px;
  :hover {
    animation: ${pulsate} 800ms ease-in infinite alternate;
  }
`;

function App() {
  return (
    <Container>
      <StyledButton variant="contained" color="primary">
        Daily Opportunities
      </StyledButton>
    </Container>
  );
}

export default App;
