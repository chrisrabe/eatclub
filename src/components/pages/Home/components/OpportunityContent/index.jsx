import React from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Container, ButtonContainer, SubText, HeaderText } from './styles';

const OpportunityContent = () => (
  <Container>
    <ButtonContainer>
      <IconButton>
        <Close />
      </IconButton>
    </ButtonContainer>
    <HeaderText>Daily Opportunities</HeaderText>
    <SubText>
      Our AI model has identified the following opportunities for your venue
      today.
    </SubText>
  </Container>
);

export default OpportunityContent;
