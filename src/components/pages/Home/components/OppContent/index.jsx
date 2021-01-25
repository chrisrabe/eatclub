import React from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Container, ButtonContainer, SubText, HeaderText } from './styles';
import OppList from './components/OppList';

const items = new Array(4).fill(1);

const OppContent = () => (
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
    <OppList items={items} />
  </Container>
);

export default OppContent;