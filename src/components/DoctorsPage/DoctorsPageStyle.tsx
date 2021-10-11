import styled from 'styled-components';
import { flex } from '@styleMixin/flex';

export const DoctorsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const DortorsWrapper = styled.div`
  max-width: 860px;
  height: fit-content;
  margin: 30px auto;
  justify-content: space-around;
  flex-wrap: wrap;
  ${flex};

  border-radius: 15px;
`;
