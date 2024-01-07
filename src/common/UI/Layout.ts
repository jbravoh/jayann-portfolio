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

export const SectionWrapper = styled(Flex)`
  justfify-content: center;
`;

export const SectionContainer = styled(Box)`
  padding: 4rem 6rem;
  max-width: 1600px;

  ${({ theme }) => theme.mq.small} {
    padding: 3rem 2rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1rem;
  }
`;

export const FooterContainer = styled(Box)`
  padding: 3.5rem 3rem;

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1.5rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1rem;
  }
`;
