import { H2 } from "../../../common/UI";
import { Box } from "../../../common/UI/Layout";

import {
  Logo,
  LogoFlex,
  SectionContainer,
  SectonWrapper,
} from "../Sections.style";
import { techLogos } from "./utils";

const Technology = () => {
  return (
    <SectionContainer isGrey>
      <SectonWrapper>
        <H2>Technology</H2>
        <LogoFlex>
          {techLogos.map((logo) => {
            return (
              <Box key={logo.name}>
                <Logo src={logo.path} alt={logo.alt} />
              </Box>
            );
          })}
        </LogoFlex>
      </SectonWrapper>
    </SectionContainer>
  );
};

export default Technology;
