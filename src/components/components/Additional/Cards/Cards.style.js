import styled from "styled-components";

export const CardValueProps = styled.div`
  margin: 10px;

  & > img {
    margin-bottom: 10px;
  }
`;

export const CardProducts = styled.div`
  position: relative;
  overflow: hidden;
  background-color: red;
  border: 2px solid black;

  & > img {
    object-fit: cover;
    border-radius: 10px;
    width: 200px;
    height: 200px;
  }

  & > h5 {
    position: absolute;
    bottom: 0;
    left: 0;
    /* transform: translateY(-50%); */
  }
`;
