import styled from "styled-components";
import { H2 } from "../../common/UI";
import { Flex } from "../../common/UI/Layout";

type NavProps = {
  isOpen: boolean;
};

export const NavContainer = styled(Flex)<NavProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  justify-content: space-between;
  padding: 1.5rem 1.8rem;
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? "40vh" : "5.438rem")};
  transition: max-height 0.3s ease-in-out;

  ${({ theme }) => theme.mq.small} {
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: start;
    padding: 1.5rem 1.8rem 2.5rem;
  }
`;

export const NavLogo = styled(H2)`
  color: ${({ theme }) => theme.color.white};
  font-size: 2rem;
`;

export const Hamburger = styled.div`
  display: none;

  ${({ theme }) => theme.mq.small} {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 1.5rem;
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
      isOpen ? "rotate(45deg) translateY(0.35rem)" : "rotate(0)"};
  }

  &:nth-child(2) {
    display: ${({ isOpen }) => (isOpen ? "none" : "")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(20px)" : "translateX(0)"};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translateY(-0.35rem)" : "rotate(0)"};
  }
`;

export const MenuList = styled.ul<NavProps>`
  display: flex;
  align-items: center;
  gap: 1.8rem;
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

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
  }
`;

export const MobileFlex = styled(Flex)`
  align-items: center;
  ${({ theme }) => theme.mq.small} {
    width: 100%;
    justify-content: space-between;
  }
`;
