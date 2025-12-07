import styled from "styled-components";
import { Box, Flex, Wrapper } from "../../common/UI";

export const SectionContainer = styled(Box)<{ isGrey?: boolean }>`
  padding: 4rem 6rem;
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

export const ContactWrapper = styled(Wrapper)`
  max-width: 60rem;
`;

export const AboutWrapper = styled(Wrapper)`
  max-width: 60rem;
`;

export const Logo = styled.img`
  max-width: 6rem;
  width: 100%;
  height: auto;

  ${({ theme }) => theme.mq.medium} {
    max-width: 5rem;
  }

  ${({ theme }) => theme.mq.small} {
    max-width: 3.5rem;
  }
`;

export const LogoProjects = styled.img`
  max-width: 3rem;
  width: 100%;
  height: auto;

  ${({ theme }) => theme.mq.small} {
    max-width: 3rem;
    width: 100%;
  }
`;

export const LogoFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;

  ${({ theme }) => theme.mq.medium} {
    gap: 1.5rem;
  }
`;

export const LogoFlexProjects = styled(Flex)`
  gap: 1rem;
  margin: 0 0 0.5rem;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.small} {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const ProjectContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 2rem;
  width: 100%;
`;

export const ProjectInfoContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-align: center;
`;

export const StyledMultiScreenMockup = styled.img`
  width: 100%;

  ${({ theme }) => theme.mq.small} {
    width: 100%;
    height: auto;
  }
`;
