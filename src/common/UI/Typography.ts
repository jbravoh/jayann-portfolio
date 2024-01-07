import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.color.yellow};
  font-size: 4.5rem;
  font-weight: 600;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 3.25rem;
  font-weight: 600;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: 2rem;
  font-weight: 600;
`;

export const Body = styled.p<{ fontWeight: "bold" | "normal" }>`
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => (fontWeight === "bold" ? 600 : 400)};
`;
