import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem
  padding: 1.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.yellow};
    border: 1px solid ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.black};
   
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${({ theme }) => theme.color.yellow};
  border: 1px solid ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  padding: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.black};
    border: none;
    color: ${({ theme }) => theme.color.white};
  }
`;

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.black};
  font-size: 1.5rem;
  padding: 0.625rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const HeroButton = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-size: 1.25rem;
  padding: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.black};
  }
`;
