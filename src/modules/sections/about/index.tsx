import { Body, H2 } from "../../../common/UI";
import { Wrapper } from "../../../common/UI/Layout";

import { SectionContainer, SectonWrapper } from "../Sections.style";

const About = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <SectonWrapper>
          <H2>About Me</H2>
          <Body fontWeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus scelerisque lacus, id egestas augue tristique at. Donec
            eleifend in velit eu varius. Nulla facilisi. Integer ut laoreet
            tortor. Mauris non eros viverra neque finibus finibus. Nam fermentum
            ut risus a viverra. Fusce vehicula tempus felis, non lobortis urna
            tristique sed.
          </Body>
          <Body fontWeight="normal">
            In hac habitasse platea dictumst. Proin rutrum tellus in tellus
            commodo cursus sit amet ut mauris. Suspendisse in neque dui.
            Curabitur volutpat sed dolor sit amet elementum. Curabitur dictum
            imperdiet rutrum. Vivamus elementum nibh vel arcu varius tincidunt.
          </Body>
        </SectonWrapper>
      </Wrapper>
    </SectionContainer>
  );
};

export default About;
