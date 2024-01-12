import { Box, H2, Wrapper } from "../../../common/UI";

import { techLogos } from "../../../utils";

import {
  Logo,
  LogoFlex,
  SectionContainer,
  SectonWrapper,
} from "../Sections.style";

const Technology = () => {
  return (
    <SectionContainer isGrey id="technology">
      <Wrapper>
        <SectonWrapper>
          <H2>Technologies Used</H2>
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
      </Wrapper>
    </SectionContainer>
  );
};

export default Technology;
