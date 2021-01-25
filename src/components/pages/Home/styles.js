import { getPulsateFrames } from 'utils/animation';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const pulsate = getPulsateFrames(1, 1.05);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledButton = styled(Button)`
  padding: 50px;
  font-weight: bold;
  font-size: 25px;
  :hover {
    animation: ${pulsate} 800ms ease-in infinite alternate;
  }
`;
