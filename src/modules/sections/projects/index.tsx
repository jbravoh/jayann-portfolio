import { useState } from "react";
import { Body, H2, H3, SecondaryButton, Toggle } from "../../../common/UI";
import { Box, Wrapper } from "../../../common/UI/Layout";
import CimpleMockup from "../../../assets/cimple-mockup.png";
import VibeLifeMockup from "../../../assets/vibe-life-mockup.png";
import PortfolioMockup from "../../../assets/portfolio-mockup.png";
import ExperienceMockup from "../../../assets/experience-mockup.png";

import {
  LogoFlexProjects,
  LogoProjects,
  ProjectContainer,
  ProjectInfoContainer,
  SectionContainer,
  SectonWrapper,
  StyledMultiScreenMockup,
} from "../Sections.style";
import { ToggleVariant } from "../../../common/UI/Toggle";
import {
  cimpleTech,
  experienceTech,
  portfolioTech,
  vibeLifeTech,
} from "./utils";

const Projects = () => {
  const [isActive, setIsActive] = useState<ToggleVariant>("professional");
  return (
    <SectionContainer>
      <Wrapper>
        <SectonWrapper>
          <H2>Projects</H2>
          <Toggle isActive={isActive} setIsActive={setIsActive} />
          {isActive === "professional" ? (
            <>
              {/* CIMPLE */}
              <ProjectContainer>
                <Box>
                  <StyledMultiScreenMockup src={CimpleMockup} />
                </Box>
                <ProjectInfoContainer>
                  <H3>Cimple</H3>
                  <Body fontWeight="normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque eleifend ex arcu, id sodales metus placerat et.
                    Donec non turpis felis. Pellentesque sed malesuada
                    lacus.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque eleifend ex arcu, id sodales metus placerat
                    et. Donec non turpis felis. Pellentesque sed malesuada
                    lacus.
                  </Body>
                  <LogoFlexProjects>
                    {cimpleTech.map((logo) => {
                      return (
                        <Box key={logo.name}>
                          <LogoProjects src={logo.path} alt={logo.alt} />
                        </Box>
                      );
                    })}
                  </LogoFlexProjects>
                  <SecondaryButton
                    href="https://cimple.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View site
                  </SecondaryButton>
                </ProjectInfoContainer>
              </ProjectContainer>

              {/* VIBE LIFE */}
              <ProjectContainer>
                <Box>
                  <StyledMultiScreenMockup src={VibeLifeMockup} />
                </Box>
                <ProjectInfoContainer>
                  <H3>Vibe Life</H3>
                  <Body fontWeight="normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque eleifend ex arcu, id sodales metus placerat et.
                    Donec non turpis felis. Pellentesque sed malesuada
                    lacus.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque eleifend ex arcu, id sodales metus placerat
                    et. Donec non turpis felis. Pellentesque sed malesuada
                    lacus.
                  </Body>
                  <LogoFlexProjects>
                    {vibeLifeTech.map((logo) => {
                      return (
                        <Box key={logo.name}>
                          <LogoProjects src={logo.path} alt={logo.alt} />
                        </Box>
                      );
                    })}
                  </LogoFlexProjects>
                  <SecondaryButton
                    href="https://vibelife.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View site
                  </SecondaryButton>
                </ProjectInfoContainer>
              </ProjectContainer>
            </>
          ) : (
            <>
              <ProjectContainer>
                <Box>
                  <StyledMultiScreenMockup src={PortfolioMockup} />
                </Box>
                <ProjectInfoContainer>
                  <H3>Portfolio</H3>
                  <Body fontWeight="normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque eleifend ex arcu, id sodales metus placerat et.
                    Donec non turpis felis. Pellentesque sed malesuada
                    lacus.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque eleifend ex arcu, id sodales metus placerat
                    et. Donec non turpis felis. Pellentesque sed malesuada
                    lacus.
                  </Body>
                  <LogoFlexProjects>
                    {portfolioTech.map((logo) => {
                      return (
                        <Box key={logo.name}>
                          <LogoProjects src={logo.path} alt={logo.alt} />
                        </Box>
                      );
                    })}
                  </LogoFlexProjects>
                  <SecondaryButton
                    href="https://github.com/jbravoh/jayann-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Github
                  </SecondaryButton>
                </ProjectInfoContainer>
              </ProjectContainer>
              <ProjectContainer>
                <Box>
                  <StyledMultiScreenMockup src={ExperienceMockup} />
                </Box>
                <ProjectInfoContainer>
                  <H3>Experience</H3>
                  <Body fontWeight="normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque eleifend ex arcu, id sodales metus placerat et.
                    Donec non turpis felis. Pellentesque sed malesuada
                    lacus.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque eleifend ex arcu, id sodales metus placerat
                    et. Donec non turpis felis. Pellentesque sed malesuada
                    lacus.
                  </Body>
                  <LogoFlexProjects>
                    {experienceTech.map((logo) => {
                      return (
                        <Box key={logo.name}>
                          <LogoProjects src={logo.path} alt={logo.alt} />
                        </Box>
                      );
                    })}
                  </LogoFlexProjects>
                  <SecondaryButton
                    href="https://github.com/jbravoh/black-codher-personal-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Github
                  </SecondaryButton>
                </ProjectInfoContainer>
              </ProjectContainer>
            </>
          )}
        </SectonWrapper>
      </Wrapper>
    </SectionContainer>
  );
};

export default Projects;
