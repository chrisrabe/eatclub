import React from 'react';
import colors from 'utils/colors';
import Info from '../Info';

const Deal = () => (
  <Info
    headingText="Deal"
    valueText="40%"
    valueStyle={{ fontSize: 35, fontWeight: 800, color: colors.primary }}
  />
);

export default Deal;
