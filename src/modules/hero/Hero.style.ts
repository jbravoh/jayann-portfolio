import styled from "styled-components";
import { Box, Flex } from "../../common/UI/Layout";

export const HeroContainer = styled(Box)`
  padding: 6.5rem 5.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black};
  margin-top: ${({ theme }) => theme.navHeight.large};

  ${({ theme }) => theme.mq.medium} {
    padding: 4.5rem 3rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1.5rem;
    margin-top: ${({ theme }) => theme.navHeight.small};
  }
`;

export const HeroWrapper = styled(Box)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const CTAFlex = styled(Flex)`
  flex-direction: row;
  justfiy-content: space-between;
  align-items: center;
  margin-top: 3.5rem;
  gap: 2rem;
  ${({ theme }) => theme.mq.small} {
    margin-top: 2.5rem;
    gap: 1rem;
  }
`;

export const StyledGithubWordmark = styled.svg`
  width: 81px;
  height: 80px;
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

// export const StyledCodeIcon = styled.svg`
//   width: 324px;
//   height: 208px;
//   fill: ${({ theme }) => theme.color.white};
//   cursor: pointer;

//   //   ${({ theme }) => theme.mq.small} {
//   //     width: 61px;
//   //     height: 60px;
//   //   }
// `;

export const HeaderAndIconFlex = styled(Flex)`
  justify-content: space-between;
`;

export const Link = styled.a``;
