import { Hamburger, Line, MobileFlex, NavContainer } from "./navbar.style";
import NavMenu from "./menu";
import { NavLogo } from "./navbar.style";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavContainer isOpen={isOpen}>
      <MobileFlex>
        <NavLogo>Jay-Ann</NavLogo>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Line isOpen={isOpen} />
          <Line isOpen={isOpen} />
          <Line isOpen={isOpen} />
        </Hamburger>
      </MobileFlex>
      <NavMenu isOpen={isOpen} />
    </NavContainer>
  );
};

export default NavBar;
