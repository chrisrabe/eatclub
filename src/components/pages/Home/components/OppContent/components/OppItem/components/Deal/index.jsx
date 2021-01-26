import React from 'react';
import colors from 'utils/colors';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import Info from '../Info';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  width: 30px;
  height: 30px;
  min-width: 30px;
  background-color: ${colors.dark};
  color: ${colors.light};
  padding: 0;
`;

const Deal = () => (
  <Container>
    <Info
      headingText="Deal"
      valueText="40%"
      valueStyle={{ fontSize: 35, fontWeight: 800, color: colors.primary }}
    />
    <ButtonContainer>
      <StyledButton variant="contained">
        <KeyboardArrowUp />
      </StyledButton>
      <StyledButton variant="contained">
        <KeyboardArrowDown />
      </StyledButton>
    </ButtonContainer>
  </Container>
);

export default Deal;
