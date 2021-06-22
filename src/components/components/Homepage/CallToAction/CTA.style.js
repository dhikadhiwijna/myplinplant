import styled from "styled-components";
import colors from "../../Additional/Styles/Colors";
import StyledContainer from "../../Additional/Styles/StyledContainer";

export const SectionCTA = styled.section`
  background-color: ${colors.yellowTransparent};
  margin: 50px 0;

  @media (max-width: 760px) {
    padding: 50px 0;
  }
`;

export const ContainerCTA = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 150px;
  min-height: 400px;

  & > div {
    margin-right: 100px;
    width: 100%;
    max-width: 600px;

    & > h2 {
      margin: 20px 0;
    }

    & > p {
      margin-bottom: 50px;
    }
  }
`;
