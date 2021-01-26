import React from 'react';
import PropTypes from 'prop-types';
import colors from 'utils/colors';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import Info from '../Info';
import { Container, ButtonContainer, StyledButton } from './styles';

const Deal = ({ value }) => (
  <Container>
    <Info
      headingText="Deal"
      valueText={value}
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

Deal.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Deal;
