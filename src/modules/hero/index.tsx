import GithubWithTitle from "../../assets/SVG/GithubWordmark";
import { H1, Link } from "../../common/UI";
import {
  CTAFlex,
  HeaderAndIconFlex,
  HeroContainer,
  HeroWrapper,
} from "./Hero.style";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroWrapper>
        <HeaderAndIconFlex>
          <H1>
            Full-stack <br /> Software Developer
          </H1>
        </HeaderAndIconFlex>
        <CTAFlex>
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
