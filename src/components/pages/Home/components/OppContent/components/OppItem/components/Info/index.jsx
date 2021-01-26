import React from 'react';
import PropTypes from 'prop-types';
import { StyledPaper, Heading, ValueText, ValueContainer } from './styles';

const Info = ({ headingText, valueText, valueStyle }) => (
  <StyledPaper>
    <Heading>{headingText}</Heading>
    <ValueContainer>
      <ValueText style={valueStyle}>{valueText}</ValueText>
    </ValueContainer>
  </StyledPaper>
);

Info.propTypes = {
  headingText: PropTypes.string.isRequired,
  valueText: PropTypes.string.isRequired,
  valueStyle: PropTypes.object,
};

export default Info;
