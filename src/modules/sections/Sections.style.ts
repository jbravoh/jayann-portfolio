import styled from "styled-components";
import { Box, Flex } from "../../common/UI/Layout";

export const SectionContainer = styled(Box)<{ isGrey?: boolean }>`
  padding: 4rem 6rem;
  max-width: 1600px;
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
