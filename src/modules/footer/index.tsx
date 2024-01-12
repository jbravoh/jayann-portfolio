import Github from "../../assets/SVG/Github";
import LinkedIn from "../../assets/SVG/LinkedIn";
import { Box, Link } from "../../common/UI";

import {
  FooterButton,
  FooterContainer,
  FooterDescription,
  FooterLink,
  FooterLogo,
  FooterWrapper,
  LinkContainer,
  LogoContainer,
} from "./footer.style";

const Footer = () => {
  const handleEmailClick = () => {
    const email = "jbravoharriott@gmail.com";

    window.location.href = `mailto:${email}`;
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Box>
          <FooterLogo>Jay-Ann</FooterLogo>
          <FooterDescription
            fontWeight="normal"
            style={{ marginTop: "0.5rem" }}
          >
            Full-stack Developer portfolio.
          </FooterDescription>
        </Box>
        <LinkContainer>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#technology">Technology</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterButton onClick={handleEmailClick}>Contact</FooterButton>
        </LinkContainer>
        <LogoContainer>
          <Link
            href="https://www.linkedin.com/in/jay-ann-bravo-harriott/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </Link>
          <Link
            href="https://github.com/jbravoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </Link>
        </LogoContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
