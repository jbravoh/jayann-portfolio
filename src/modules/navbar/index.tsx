import {
  Hamburger,
  Line,
  MobileFlex,
  NavContainer,
  NavLogo,
} from "./navbar.style";
import NavMenu from "./menu";

import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <NavContainer isOpen={isOpen}>
      <MobileFlex>
        <NavLogo href="#hero" onClick={handleNavIsOpen}>
          Jay-Ann
        </NavLogo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <Line isOpen={isOpen} />
          <Line isOpen={isOpen} />
          <Line isOpen={isOpen} />
        </Hamburger>
      </MobileFlex>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavContainer>
  );
};

export default NavBar;
