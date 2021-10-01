import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 0;

  box-shadow: 0px 0px 5px 0px ${STYLE_CONSTANTS.COLORS.lightGrey};

  button {
    position: relative;
    bottom: 0;
    right: 0;
  }
`;

export const ContainersName = styled.span`
  position: absolute;
  top: -13px;
  left: 10px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  padding: 0 5px;
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Item = styled.div`
  width: 90%;
  height: 45px;
  border-bottom: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;

  span {
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
    font-weight: 600;
  }

  button {
    min-width: 30px;
    margin: 0;
  }
`;
