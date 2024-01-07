import GithubWithTitle from "../../common/UI/SVG/GithubWordmark";
import { H1, HeroButton } from "../../common/UI";
import { CTAFlex, HeaderAndIconFlex, HeroContainer, Link } from "./Hero.style";
import { Wrapper } from "../../common/UI/Layout";
import cv from "../../../public/jayann_bravoharriott_cv.pdf";

const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <HeaderAndIconFlex>
          <H1>
            Full-Stack <br /> Software Developer
          </H1>
          {/* <CodeIcon /> */}
        </HeaderAndIconFlex>
        <CTAFlex>
          <HeroButton href={cv} target="_blank" rel="noopener noreferrer">
            Download CV
          </HeroButton>
          <Link
            href="https://github.com/jbravoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubWithTitle />
          </Link>
        </CTAFlex>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
