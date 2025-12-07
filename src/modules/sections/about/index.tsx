import { Body, H2, Wrapper } from "../../../common/UI";

import { SectionContainer, SectonWrapper } from "../Sections.style";

const About = () => {
  return (
    <SectionContainer id="about">
      <Wrapper>
        <SectonWrapper>
          <H2 style={{ textAlign: "center" }}>
            Hey, I&apos;m Jay-Ann Bravo-Harriott
          </H2>
          <Body fontWeight="normal" style={{ textAlign: "center" }}>
            Welcome to my portfolio!
          </Body>
          <Body fontWeight="normal" style={{ textAlign: "center" }}>
            I&apos;m a Full-stack Engineer with 3+ years of experience,
            currently specializing in frontend development at Orbital, a global
            payments platform. My expertise primarily lies in the JavaScript
            stack, but my curiosity and creativity drive me to explore new
            technologies. Below, you&apos;ll discover a showcase of my
            professional and personal projects, highlighting my journey in
            software development. Feel free to browse, and don&apos;t hesitate
            to reach out.
          </Body>
          <Body fontWeight="normal" style={{ textAlign: "center" }}></Body>
        </SectonWrapper>
      </Wrapper>
    </SectionContainer>
  );
};

export default About;
