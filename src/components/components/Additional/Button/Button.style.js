import styled from "styled-components";
import colors from "../Styles/Colors";

export const BtnComponent = styled.button`
  font-family: inherit;
  outline: none;
  cursor: pointer;
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: ${colors.green};
  color: ${({ bgColor }) =>
    bgColor === "unset" ? colors.yellow : colors.white};

  &:hover {
    background-color: ${colors.lightGreen};
    border: 2px solid ${colors.lightGreen};
    color: ${colors.yellow};
  }
`;
