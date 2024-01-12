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
            I&apos;m a Full-stack developer with over two years of professional
            experience in crafting user-focused web and mobile applications.
            Currently, I&apos;m making strides at Cimple, where I&apos;m
            developing a B2B procurement platform, which as you guessed it, is a
            platform that simplifies procurement and makes it accessible for
            everyone.
          </Body>

          <Body fontWeight="normal" style={{ textAlign: "center" }}>
            My expertise primarily lies in the JavaScript stack, but my
            curiosity and creativity drive me to explore new technologies. My
            unique background as a former international basketball player,
            combined with my experiences in marketing and design, has shaped my
            approach to problem-solving and innovation in the tech industry.
          </Body>
          <Body fontWeight="normal" style={{ textAlign: "center" }}>
            Below, you&apos;ll discover a showcase of my projects, highlighting
            my journey in software development. Feel free to browse, and
            don&apos;t hesitate to reach out with any questions or thoughts.
          </Body>
        </SectonWrapper>
      </Wrapper>
    </SectionContainer>
  );
};

export default About;
