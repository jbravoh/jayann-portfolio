import styled from "styled-components";
import { Box, Flex } from "../../common/UI/Layout";
import { NavLogo } from "../navbar/navbar.style";
import { Body, Link } from "../../common/UI";

export const FooterContainer = styled(Box)`
  padding: 2rem 1.5rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.medium} {
    padding: 2rem 1.5rem;
  }

  ${({ theme }) => theme.mq.small} {
    padding: 2rem 1rem;
  }
`;

export const FooterWrapper = styled(Flex)`
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.medium} {
    gap: 2rem;
  }

  ${({ theme }) => theme.mq.small} {
    gap: 1rem;
  }
`;

export const FooterLogo = styled(NavLogo)`
  color: ${({ theme }) => theme.color.yellow};
  text-align: center;

  ${({ theme }) => theme.mq.medium} {
    font-size: 1.5rem;
  }
`;

export const LinkContainer = styled(Flex)`
  gap: 2rem;
  align-items: center;

  ${({ theme }) => theme.mq.small} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
  }

  ${({ theme }) => theme.mq.small} {
    font-size: 0.875rem;
  }
`;

export const FooterDescription = styled(Body)`
  ${({ theme }) => theme.mq.medium} {
    text-align: center;
  }
`;

export const LogoContainer = styled(Flex)`
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const StyledFooterSvg = styled.svg`
  width: 2.5em;
  height: 2.5rem;
  fill: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    fill: ${({ theme }) => theme.color.yellow};
  }
`;
