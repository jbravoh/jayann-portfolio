import { useState } from "react";
import { Box, H2, Toggle, Wrapper } from "../../../common/UI";

import CimpleMockup from "../../../assets/mockups/cimple-mockup.png";
import VibeLifeMockup from "../../../assets/mockups/vibe-life-mockup.png";
import PortfolioMockup from "../../../assets/mockups/portfolio-mockup.png";
import ExperienceMockup from "../../../assets/mockups/experience-mockup.png";
import MarieMockup from "../../../assets/mockups/marie-mockup.png";
import OrbitalMockup from "../../../assets/mockups/orbital-mockup.png";
import CapiMockup from "../../../assets/mockups/capi-mockup.png";
import RebeccaJaneWellnessMockup from "../../../assets/mockups/rebecca-jane-wellness-mockup.png";
import { SectionContainer, SectonWrapper } from "../Sections.style";
import { ToggleVariant } from "../../../common/UI/Toggle";
import {
  capiTech,
  cimpleTech,
  experienceTech,
  marieTech,
  orbitalTech,
  portfolioTech,
  rebeccaJaneWellnessTech,
  vibeLifeTech,
} from "../../../utils";
import { ProjectComponent } from "./ProjectComponent";

const Projects = () => {
  const [isActive, setIsActive] = useState<ToggleVariant>("professional");

  const professionalProjects = [
    {
      title: "Capi Money",
      description:
        "I worked as a Senior Software Engineer at Capi, a tech-for-good B2B platform helping African businesses make cross-border payments, processing $1bn+ a year. Using TypeScript, Next.js, Node.js, Express, Temporal, PostgreSQL, Supabase, Hasura and Storybook, I built the Crown Agents Bank payout integration end to end, automating a rail that carried over a quarter of payout volume, supported two further payout provider integrations and built exchange rate syncing with XE, contributing to a record quarter of 8,426 payouts worth $313.9M. I led the front-end foundations for the new transactions flow, integrating the wallet with document uploads and top-up alerts, and led the Storybook rollout to create a shared component library across our apps.",
      mockup: CapiMockup,
      tech: capiTech,
      href: "https://capimoney.com/",
      buttonText: "View Site",
    },
    {
      title: "Orbital",
      description:
        "I worked as a Frontend Engineer at Orbital, a global payments platform processing £12bn+ annually across traditional and crypto currencies. Using React, TypeScript, GraphQL, AWS, Styled Components, and Storybook, I rebuilt the user management system, implemented compliance features, and contributed to two design system rebuilds including a full rebrand. I refactored the codebase during our REST to GraphQL migration, made the platform responsive down to tablet, and built mass payments functionality.",
      mockup: OrbitalMockup,
      tech: orbitalTech,
    },
    {
      title: "Vibe Life",
      description:
        "Vibe Life is a Community Interest Company making fitness accessible to all and reducing health inequalities within deprived communities. I built their complete platform using Next.js, TypeScript, Contentful CMS, Styled Components, Resend, and Mailchimp. The headless CMS architecture enables the team to manage events and blog posts independently, while automated email workflows handle newsletter subscriptions and contact form submissions. I handled everything from architecture and development to deployment and ongoing maintenance.",
      tech: vibeLifeTech,
      mockup: VibeLifeMockup,
      href: "https://vibelife.org/",
      buttonText: "View Site",
    },
    {
      title: "Rebecca Jane Wellness",
      description:
        "Rebecca Jane Wellness runs Pilates, Yoga and Chair Yoga classes for the Aldridge and Walsall community. I built their website using Astro and React. The fast, responsive site helps new clients explore classes, check the timetable, browse the gallery and read testimonials, while the contact form sends enquiries straight to Rebecca's inbox using Resend, with Cloudflare Turnstile protecting it from bots.",
      tech: rebeccaJaneWellnessTech,
      mockup: RebeccaJaneWellnessMockup,
      href: "https://rebeccajanewellness.co.uk/",
      buttonText: "View Site",
    },
    {
      title: "Cimple",
      description:
        "I worked as a Full-stack Developer at Cimple, a B2B procurement platform that simplifies procurement for businesses. Using TypeScript, Next.js, Styled Components, Cypress, Node.js, Elixir, Phoenix, GraphQL, PostgreSQL and AWS, I built features for the procurement opportunity lifecycle—from creation and supplier applications through to evaluation and contract awarding.",
      tech: cimpleTech,
      mockup: CimpleMockup,
      href: "https://cimple.uk/",
      buttonText: "View Site",
    },
    {
      title: "Marie",
      description:
        "During my time at Future Arc, I helped design and build a mobile application for Marie Curie to support unpaid carers of terminally ill patients. The app allows users to record daily journals, access helpful resources, and complete wellbeing check-ins. I worked closely with the design team to create a simple, accessible interface and contributed to the full-stack development of the core features and user flows.",
      tech: marieTech,
      mockup: MarieMockup,
    },
  ];

  const personalProjects = [
    {
      title: "Portfolio",
      description:
        "My portfolio was designed with Figma and created using TypeScript, React and Styled Components. Here I wanted to emphasise the responsiveness of this web application as it is suitable for phone, tablet and desktop.",
      tech: portfolioTech,
      mockup: PortfolioMockup,
      href: "https://github.com/jbravoh/jayann-portfolio",
      buttonText: "View Github Repo",
    },
    {
      title: "Experience",
      description:
        "Experience was created using CSS, React, Node.js and MongoDB. This web application connects individuals looking for opportunities and businesses providing those opportunities. It was created to help people develop skills, explore industries and improve employability through projects, volunteer work and internships.",
      tech: experienceTech,
      mockup: ExperienceMockup,
      href: "https://github.com/jbravoh/black-codher-personal-project",
      buttonText: "View Github Repo",
    },
  ];

  return (
    <Box id="projects">
      <SectionContainer>
        <Wrapper>
          <SectonWrapper>
            <H2>Projects</H2>
            <Toggle isActive={isActive} setIsActive={setIsActive} />
            {isActive === "professional" ? (
              <>
                {/* CAPI */}
                <ProjectComponent {...professionalProjects[0]} />
                {/* ORBITAL */}
                <ProjectComponent {...professionalProjects[1]} />
                {/* VIBE LIFE */}
                <ProjectComponent {...professionalProjects[2]} />
                {/* REBECCA JANE WELLNESS */}
                <ProjectComponent {...professionalProjects[3]} />
                {/* CIMPLE */}
                <ProjectComponent {...professionalProjects[4]} />
                {/* Marie */}
                <ProjectComponent {...professionalProjects[5]} />
              </>
            ) : (
              <>
                {/* PORTFOLIO */}
                <ProjectComponent {...personalProjects[0]} />
                {/* EXPERIENCE */}
                <ProjectComponent {...personalProjects[1]} />
              </>
            )}
          </SectonWrapper>
        </Wrapper>
      </SectionContainer>
    </Box>
  );
};

export default Projects;
