import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/common/Dialog';
import { Container, StyledButton } from './styles';

const Home = ({ isOpen, setIsOpen, dialogData }) => (
  <Container>
    <StyledButton variant="contained" color="primary">
      Daily Opportunities
    </StyledButton>
    <Dialog
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      content={dialogData.content}
      actions={dialogData.actions}
    />
  </Container>
);

Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  dialogData: PropTypes.object.isRequired,
};

export default Home;
