import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.color.yellow};
  font-size: 4rem;
  font-weight: 600;

  ${({ theme }) => theme.mq.medium} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.mq.small} {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 3.25rem;
  font-weight: 700;

  ${({ theme }) => theme.mq.medium} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.mq.small} {
    font-size: 2rem;
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: 2rem;
  font-weight: 600;
`;

export const Body = styled.p<{ fontWeight: "bold" | "normal" }>`
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => (fontWeight === "bold" ? 600 : 400)};
  line-height: 1.8rem;

  // ${({ theme }) => theme.mq.medium} {
  //   font-size: 0.875rem;
  // }

  ${({ theme }) => theme.mq.small} {
    font-size: 0.875rem;
  }
`;
