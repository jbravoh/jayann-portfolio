import styled from "styled-components";
import { Flex, Wrapper } from "../../common/UI/Layout";

export const SectionContainer = styled(Wrapper)<{ isGrey?: boolean }>`
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
  text-align: center;

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
