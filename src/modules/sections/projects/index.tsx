import { useState } from "react";
import CimpleMockup from "../../../assets/SVG/CimpleMockup";
import { Body, H2, H3, Toggle } from "../../../common/UI";
import { Box, Wrapper } from "../../../common/UI/Layout";

import {
  ProjectContainer,
  ProjectInfoContainer,
  SectionContainer,
  SectonWrapper,
} from "../Sections.style";
import { ToggleVariant } from "../../../common/UI/Toggle";

const Projects = () => {
  const [isActive, setIsActive] = useState<ToggleVariant>("professional");
  return (
    <SectionContainer>
      <Wrapper>
        <SectonWrapper>
          <H2>Projects</H2>
          <Toggle isActive={isActive} setIsActive={setIsActive} />
          <ProjectContainer>
            <Box>
              <CimpleMockup />
            </Box>
            <ProjectInfoContainer>
              <H3>Cimple</H3>
              <Body fontWeight="normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eleifend ex arcu, id sodales metus placerat et. Donec non turpis
                felis. Pellentesque sed malesuada lacus.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Quisque eleifend ex arcu, id
                sodales metus placerat et. Donec non turpis felis. Pellentesque
                sed malesuada lacus.
              </Body>
            </ProjectInfoContainer>
          </ProjectContainer>
        </SectonWrapper>
      </Wrapper>
    </SectionContainer>
  );
};

export default Projects;
