import styled from "styled-components";
import { Box, Flex } from "../../common/UI/Layout";

export const SectionContainer = styled(Box)<{ isGrey?: boolean }>`
  padding: 4rem 6rem;
  //   margin: 0 auto;
  //   width: 100%;
  //   max-width: 1600px;
  background-color: ${({ theme, isGrey }) =>
    isGrey ? theme.color.grey.soft : theme.color.white};

  ${({ theme }) => theme.mq.medium} {
    padding: 3rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1.5rem;
  }
`;

export const SectonWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  ${({ theme }) => theme.mq.medium} {
    text-align: center;
  }

  ${({ theme }) => theme.mq.small} {
    gap: 1rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;

  ${({ theme }) => theme.mq.medium} {
    width: 80%;
  }

  ${({ theme }) => theme.mq.small} {
    width: 80%;
  }
`;

export const LogoFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  ${({ theme }) => theme.mq.medium} {
    gap: 1.5rem;
  }

  ${({ theme }) => theme.mq.small} {
    gap: 1rem;
  }
`;

export const ProjectContainer = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

export const ProjectInfoContainer = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 1rem;
`;

export const StyledCimpleMockup = styled.svg`
  width: 41.563rem;
  height: 24.063rem;
  fill: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    fill: ${({ theme }) => theme.color.yellow};
  }

  ${({ theme }) => theme.mq.small} {
    width: 61px;
    height: 60px;
  }
`;
