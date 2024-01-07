import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
`;

export const Flex = styled.div`
  display: flex;
`;

export const HeroContainer = styled.div`
  padding: 6.5rem 5.5rem;

  ${({ theme }) => theme.mq.small} {
    padding: 4.5rem 3rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1rem;
  }
`;

export const SectionContainer = styled.div`
  padding: 4rem 6rem;
  max-width: 1600px;

  ${({ theme }) => theme.mq.small} {
    padding: 3rem 2rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1rem;
  }
`;

export const FooterContainer = styled.div`
  padding: 3.5rem 3rem;

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1.5rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1rem;
  }
`;
