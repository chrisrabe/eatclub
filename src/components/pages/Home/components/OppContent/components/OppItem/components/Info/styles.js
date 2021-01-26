import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const StyledPaper = styled(Paper)`
  min-width: 100px;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 4px 4px rgba(0, 0, 0, 0.10);
`;

export const ValueText = styled.h3`
  margin: 0;
  font-weight: bold;
`;

export const Heading = styled.h6`
  font-weight: bold;
  margin: 0;
  opacity: 0.6;
  width: 50px;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;
