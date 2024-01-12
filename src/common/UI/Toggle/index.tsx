import styled from "styled-components";
import { Flex } from "..";

const ToggleContainer = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.color.white};
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const Option = styled.div<{ isActive: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.black : theme.color.grey.light};
  color: ${({ isActive, theme }) =>
    isActive ? theme.color.yellow : theme.color.grey.medium};
  transition:
    background-color 0.3s,
    color 0.3s;
  font-weight: 600;

  &:nth-child(1) {
    border-radius: 0.3125rem 0rem 0rem 0.3125rem;
  }

  &:nth-child(2) {
    border-radius: 0rem 0.3125rem 0.3125rem 0rem;
  }
`;

export type ToggleVariant = "professional" | "personal";

type ToggleProps = {
  isActive: ToggleVariant;
  setIsActive: React.Dispatch<React.SetStateAction<ToggleVariant>>;
};

const Toggle = ({ isActive, setIsActive }: ToggleProps) => {
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
