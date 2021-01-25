import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/common/Dialog';
import { Container, StyledButton } from './styles';
import OppContent from './components/OppContent';

const Home = ({ isOpen, setIsOpen, dialogData, setData }) => {
  const openDialog = useCallback(() => {
    const data = {
      content: <OppContent />,
    };
    setData(data);
    setIsOpen(true);
  }, [setIsOpen, setData]);

  return (
    <Container>
      <StyledButton variant="contained" color="primary" onClick={openDialog}>
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
};

Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  dialogData: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Home;
