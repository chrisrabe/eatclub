import styled from 'styled-components';
import { Button } from '@material-ui/core';
import colors from 'utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const StyledButton = styled(Button)`
  width: 30px;
  height: 30px;
  min-width: 30px;
  background-color: ${colors.dark};
  color: ${colors.light};
  padding: 0;
`;
