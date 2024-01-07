import styled from "styled-components";
import { Box, Flex } from "../../common/UI/Layout";

export const SectionContainer = styled(Box)`
  padding: 4rem 6rem;
  max-width: 1600px;

  ${({ theme }) => theme.mq.medium} {
    padding: 3rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1rem;
  }
`;

export const SectonWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;
