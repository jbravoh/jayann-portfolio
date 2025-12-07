import React from "react";
import { Body, Box, H3, SecondaryButton } from "../../../common/UI";
import {
  LogoFlexProjects,
  LogoProjects,
  ProjectContainer,
  ProjectInfoContainer,
  StyledMultiScreenMockup,
} from "../Sections.style";

interface Project {
  title: string;
  description: string;
  tech: { name: string; path: string; alt: string }[];
  mockup: string;
  href?: string;
  buttonText?: string;
}

const ProjectComponent = ({
  mockup,
  description,
  tech,
  title,
  href,
  buttonText,
}: Project) => {
  return (
    <ProjectContainer>
      <ProjectInfoContainer>
        <H3>{title}</H3>
        <Body fontWeight="normal">{description}</Body>
        <LogoFlexProjects>
          {tech.map((logo) => {
            return (
              <Box key={logo.name}>
                <LogoProjects src={logo.path} alt={logo.alt} />
              </Box>
            );
          })}
        </LogoFlexProjects>
        {buttonText && (
          <SecondaryButton
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </SecondaryButton>
        )}
      </ProjectInfoContainer>
      <Box style={{ maxWidth: "1000px" }}>
        <StyledMultiScreenMockup src={mockup} />
      </Box>
    </ProjectContainer>
  );
};

export { ProjectComponent };
export default ProjectContainer;
