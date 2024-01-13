import { useState } from "react";
import {
  Body,
  Box,
  H2,
  H3,
  SecondaryButton,
  Toggle,
  Wrapper,
} from "../../../common/UI";

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
} from "../../../utils";

const Projects = () => {
  const [isActive, setIsActive] = useState<ToggleVariant>("professional");
  return (
    <Box id="projects">
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
                      I&apos;m currently a Full-stack developer at Cimple and we
                      use TypeScript, Next.js, Styled Components, Cypress,
                      Elixir, Phoenix, GraphQL, PostgreSQL and AWS. Cimple
                      understands the complexities in procurement and has
                      created a B2B procurement platform that aims to make it
                      more accessible and intuitive for everyone.
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
                      View Site
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
                      Vibe Life is a Community Interest Company founded in 2022
                      with the vision of making physical activity and wellbeing
                      accessible for all and reducing health inequalities within
                      deprived communities. I designed and built this website
                      using Figma and Wordpress to accommodate the business
                      needs, with the user experience at the heart of the
                      process. This is work in progress and will progress as the
                      business grows.
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
                      View Site
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
                      My portfolio was designed with Figma and created using
                      TypeScript, React and Styled Components. Here I wanted to
                      emphasise the responsiveness of this web application as it
                      is suitable for both phone, tablet and desktop.
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
                      View Github Repo
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
                      Experience was created using CSS, React, Node.js and
                      MongoDB. This web application connects individuals looking
                      for opportunities and businesses providing those
                      opportunities. It was created to help people develop
                      skills, explore industries and improve employability
                      through projects, volunteer work and internships.
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
                      View Github Repo
                    </SecondaryButton>
                  </ProjectInfoContainer>
                </ProjectContainer>
              </>
            )}
          </SectonWrapper>
        </Wrapper>
      </SectionContainer>
    </Box>
  );
};

export default Projects;
