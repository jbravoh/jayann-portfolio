import styled from "styled-components";
import { Box, Flex, H2, Link } from "../../common/UI";

type NavProps = {
  isOpen: boolean;
};

export const NavContainer = styled(Flex)<NavProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  justify-content: space-between;
  padding: 1.5rem 1.8rem;
  width: 100%;
  height: 100%;
  max-height: ${({ theme }) => theme.navHeight.large};

  z-index: 999;
  position: fixed;
  top: 0;

  ${({ theme }) => theme.mq.small} {
    transition: max-height 0.3s ease-in-out;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: start;
    padding: 1.5rem 1.5rem 2.5rem;
    max-height: ${({ isOpen, theme }) =>
      isOpen ? "100vh" : theme.navHeight.small};

    ${({ theme }) => theme.navHeight.small}
  }
`;

export const NavLogo = styled(H2).attrs({
  as: "a",
})`
  color: ${({ theme }) => theme.color.white};
  font-size: 2rem;
  text-decoration: none;

  ${({ theme }) => theme.mq.small} {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: none;
  height: 100%;

  ${({ theme }) => theme.mq.small} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
    width: 1.5rem; // Width of the hamburger
    height: 1.5rem;

    cursor: pointer;
  }
`;

export const Line = styled.div<NavProps>`
  background-color: ${({ theme }) => theme.color.white};
  height: 3px;
  width: 100%;
  border-radius: 1rem;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translateX(0.30rem)" : "rotate(0)"};
  }

  &:nth-child(2) {
    display: ${({ isOpen }) => (isOpen ? "none" : "")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(20px)" : "translateX(0)"};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translateX(0.30rem)" : "rotate(0)"};
  }
`;

export const MenuList = styled.ul<NavProps>`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.5rem;
  transition:
    transform 0.3s ease-in-out 0.2s,
    visibility 0.3s ease-in-out;

  ${({ theme }) => theme.mq.small} {
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    overflow: hidden;

    display: flex;
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.color.white};
  list-style-type: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  box-sizing: border-box;

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
  }
`;

export const MobileFlex = styled(Flex)`
  ${({ theme }) => theme.mq.small} {
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
  }
`;

export const NavButtonContainer = styled(Box)`
  ${({ theme }) => theme.mq.small} {
    margin-top: 0.5rem;
  }
`;
