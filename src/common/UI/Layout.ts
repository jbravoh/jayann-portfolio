import styled from "styled-components";

export const Box = styled.div`
  box-sizing: border-box;
`;

export const Grid = styled(Box)`
  display: grid;
`;

export const Flex = styled(Box)`
  display: flex;
`;

export const Wrapper = styled(Box)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
