import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Deal from './components/Deal';
import Info from './components/Info';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled.h4`
  font-weight: bold;
  margin: 5px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 5px;
  padding: 10px 0px;
  justify-content: space-between;
  width: 100%;
`;

const OppItem = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Heading>Opportunity</Heading>
      <BodyContainer>
        <Deal />
        <Info headingText="Time" valueText="8am - 10am" />
        <Info headingText="Expected Customers" valueText="4 - 9 ppl" />
      </BodyContainer>
    </Container>
  );
};

OppItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OppItem;
