import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme }) => theme.color.black};
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  text-decoration: none;
  border-radius: 0.87619rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.yellow};
    border: 1px solid ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const SecondaryButton = styled.a`
  background-color: ${({ theme }) => theme.color.yellow};
  border: 2px solid ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.87619rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.color.yellow};
  border-radius: 0.5625rem;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  padding: 0.625rem;
  border-style: none;
  transition: background-color 0.3s ease-in-out;
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const HeroButton = styled.a`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-size: 1rem;
  font-weight: 700;
  height: 100%;
  padding: 1rem;
  border-style: none;
  border-radius: 0.87619rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.color.white};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.yellow};
    border: 1px solid ${({ theme }) => theme.color.yellow};
  }

  ${({ theme }) => theme.mq.small} {
    font-size: 0.75rem;
    padding: 0.75rem;
  }
`;
