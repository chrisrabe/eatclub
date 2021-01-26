import styled from 'styled-components';
import colors from 'utils/colors';

export const Container = styled.div`
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 700px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderText = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 40px;
  margin: 0;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const SubText = styled.p`
  font-weight: 300;
  font-size: 25px;
  text-align: center;
  margin: 10px 25px;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 480px;
  overflow-y: scroll;
`;
