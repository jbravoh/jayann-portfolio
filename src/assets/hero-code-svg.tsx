import { SVGProps } from "react";
import { StyledCodeIcon } from "../modules/hero/Hero.style";

interface Props extends SVGProps<SVGSVGElement> {}

const CodeIcon = (props: Props) => (
  <StyledCodeIcon
    // width={324}
    // height={208}
    viewBox="0 0 324 208"
    // fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M105.36 163.12L0.640001 123.3V94.7L105.36 54.88V82.38L10.98 116.7V101.3L105.36 135.62V163.12ZM111.439 208L184.039 0.759985H214.619L142.019 208H111.439ZM218.492 163.12V135.62L312.872 101.3V116.7L218.492 82.38V54.88L323.212 94.7V123.3L218.492 163.12Z"
      // fill="white"
    />
  </StyledCodeIcon>
);

export default CodeIcon;
