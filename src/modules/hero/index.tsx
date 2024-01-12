import GithubWithTitle from "../../assets/SVG/GithubWordmark";
import { H1, HeroButton, Link } from "../../common/UI";
import {
  CTAFlex,
  HeaderAndIconFlex,
  HeroContainer,
  HeroWrapper,
} from "./Hero.style";
import cv from "../../../public/jayann_bravoharriott_cv.pdf";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeaderAndIconFlex>
          <H1>
            Full-stack <br /> Software Developer
          </H1>
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
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
