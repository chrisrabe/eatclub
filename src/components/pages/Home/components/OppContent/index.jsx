import React, { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useQuery } from '@apollo/client';
import OPPORTUNITIES from 'graphql/queries/get.oppos';
import { useSnackbar } from 'material-ui-snackbar-provider';
import OppList from './components/OppList';
import {
  Container,
  ButtonContainer,
  SubText,
  HeaderText,
  ListContainer,
} from './styles';

const OppContent = () => {
  const [items, setItems] = useState([]);
  const { loading, error, data } = useQuery(OPPORTUNITIES);
  const snackbar = useSnackbar();

  useEffect(() => {
    if (error) {
      snackbar.showMessage(error.message);
    } else if (!loading && data) {
      setItems(data.opposForToday);
    }
  }, [loading, error, data]);

  return (
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
      <ListContainer>
        <OppList items={items} />
      </ListContainer>
    </Container>
  );
};

export default OppContent;
