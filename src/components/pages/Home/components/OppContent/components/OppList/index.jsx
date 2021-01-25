import React from 'react';
import PropTypes from 'prop-types';
import { fadeIn, getDelayTemplate } from 'utils/animation';
import styled from 'styled-components';
import colors from 'utils/colors';
import { List, ListItem } from '@material-ui/core';
import OppItem from '../OppItem';

const OppList = ({ items }) => {
  const getAnimations = () => {
    let str = '';
    for (let i = 0; i < items.length; i++) {
      str += getDelayTemplate(i, 0.25);
    }
    return str;
  };

  const StyledListItem = styled(ListItem)`
    background-color: ${colors.light};
    animation: ${fadeIn} 0.5s linear;
    animation-fill-mode: both;
    ${getAnimations()}
  `;

  return (
    <List>
      {items.map((item, index) => (
        <StyledListItem key={`item-${index}`}>
          <OppItem item={item} />
        </StyledListItem>
      ))}
    </List>
  );
};

OppList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default OppList;
