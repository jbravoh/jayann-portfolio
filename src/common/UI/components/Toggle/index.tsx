import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.white}};
  border-radius: 20px;
  overflow: hidden;
`;

const Option = styled.div<{ isActive: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.black : theme.color.grey.light};
  color: ${({ isActive, theme }) =>
    isActive ? theme.color.yellow : theme.color.white};
  transition:
    background-color 0.3s,
    color 0.3s;
`;

type ToggleVariant = "professional" | "personal";

const Toggle = () => {
  const [isActive, setIsActive] = useState<ToggleVariant>("professional");

  return (
    <ToggleContainer>
      <Option
        isActive={isActive === "professional"}
        onClick={() => setIsActive("professional")}
      >
        Professional
      </Option>
      <Option
        isActive={isActive === "personal"}
        onClick={() => setIsActive("personal")}
      >
        Personal
      </Option>
    </ToggleContainer>
  );
};

export default Toggle;
