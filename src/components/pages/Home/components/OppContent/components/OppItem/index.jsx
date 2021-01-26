import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import POST_OPPO from 'graphql/queries/post.oppo';
import Deal from './components/Deal';
import Info from './components/Info';
import { Container, BodyContainer, StyledButton, Heading } from './styles';

const toTimeText = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;
  if (hours > 12) {
    // afternoon
    const hrsDisplay = hours - 12;
    return minutes > 0 ? `${hrsDisplay}:${minutes}pm` : `${hrsDisplay}pm`;
  }
  // morning
  return minutes > 0 ? `${hours}:${minutes}am` : `${hours}am`;
};

const OppItem = memo(({ item, index }) => {
  const [postOppo] = useMutation(POST_OPPO);
  const startText = toTimeText(item.startTime);
  const endText = toTimeText(item.endTime);
  const time = `${startText} - ${endText}`;

  const handleClick = useCallback(() => {
    (async () => postOppo({ variables: { oppoId: item.objectId } }))();
  }, [postOppo, item]);

  return (
    <Container>
      <Heading>Opportunity {index + 1}</Heading>
      <BodyContainer>
        <Deal value={item.discount} />
        <Info headingText="Time" valueText={time} />
        <Info headingText="Expected Customers" valueText={item.prediction} />
        <StyledButton variant="contained" color="primary" onClick={handleClick}>
          Post Now
        </StyledButton>
      </BodyContainer>
    </Container>
  );
});

OppItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default OppItem;
