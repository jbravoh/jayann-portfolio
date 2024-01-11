import { Body, Button, H2 } from "../../../common/UI";

import {
  ContactWrapper,
  SectionContainer,
  SectonWrapper,
} from "../Sections.style";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "jbravoh@gmail.com";
    const subject = "Enquiry";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}`;
  };

  return (
    <SectionContainer isGrey>
      <ContactWrapper>
        <SectonWrapper>
          <H2>Contact</H2>
          <Body fontWeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus scelerisque lacus, id egestas augue tristique at. Donec
            eleifend in velit eu varius. Nulla facilisi. Integer ut laoreet
            tortor. Mauris non eros viverra neque finibus finibus. Nam fermentum
            ut risus a viverra. Fusce vehicula tempus felis, non lobortis urna
            tristique sed.
          </Body>
          <Button onClick={handleEmailClick} style={{ marginTop: "1rem" }}>
            Send Email
          </Button>
        </SectonWrapper>
      </ContactWrapper>
    </SectionContainer>
  );
};

export default Contact;
