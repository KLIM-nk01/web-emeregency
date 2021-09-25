import { scroll } from "@styleMixin/scroll";
import styled from "styled-components";

export const DoctorsPageNavBarWrapper = styled.div`
  width: 100%;
  height: 125px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
  ${scroll};
`;