import React from 'react';
import PropTypes from 'prop-types';
import Deal from './components/Deal';
import Info from './components/Info';
import { Container, BodyContainer, StyledButton, Heading } from './styles';

const OppItem = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Heading>Opportunity</Heading>
      <BodyContainer>
        <Deal />
        <Info headingText="Time" valueText="8am - 10am" />
        <Info headingText="Expected Customers" valueText="4 - 9 ppl" />
        <StyledButton variant="contained" color="primary">
          Post Now
        </StyledButton>
      </BodyContainer>
    </Container>
  );
};

OppItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OppItem;
