import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import colors from 'utils/colors';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import Info from '../Info';
import { Container, ButtonContainer, StyledButton } from './styles';

const Deal = ({ value }) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(parseInt(value, 10));
  }, [value]);

  const increaseDeal = useCallback(() => {
    if (num < 50) {
      setNum(num + 5);
    }
  }, [setNum, num]);

  const decreaseDeal = useCallback(() => {
    if (num > 10) {
      setNum(num - 5);
    }
  }, [setNum, num]);

  return (
    <Container>
      <Info
        headingText="Deal"
        valueText={`${num}%`}
        valueStyle={{ fontSize: 35, fontWeight: 800, color: colors.primary }}
      />
      <ButtonContainer>
        <StyledButton variant="contained" onClick={increaseDeal}>
          <KeyboardArrowUp />
        </StyledButton>
        <StyledButton variant="contained" onClick={decreaseDeal}>
          <KeyboardArrowDown />
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

Deal.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Deal;
