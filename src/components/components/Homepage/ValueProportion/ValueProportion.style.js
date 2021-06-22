import styled from "styled-components";
import StyledContainer from "../../Additional/Styles/StyledContainer";

export const ContainerValueProps = styled(StyledContainer)`
  text-align: center;

  & > h2 {
    margin: 50px 0;
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
`;
