import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Heading = styled.h4`
  font-weight: bold;
  margin: 5px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 5px;
  padding: 10px 0px;
  justify-content: space-between;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  height: 80px;
  font-weight: bold;
`;
