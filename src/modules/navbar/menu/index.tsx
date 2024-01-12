import { NavButton, Box } from "../../../common/UI";

import { menuItems } from "../../../utils";
import {
  MenuItem,
  MenuList,
  NavButtonContainer,
  NavLink,
} from "../navbar.style";

type NavMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ isOpen, setIsOpen }: NavMenuProps) => {
  const handleEmailClick = () => {
    const email = "jbravoharriott@gmail.com";

    window.location.href = `mailto:${email}`;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuList isOpen={isOpen}>
        {menuItems.map((item) => {
          const isButton = item.id === "contact";
          return (
            <Box key={item.id}>
              {isButton ? (
                <NavButtonContainer>
                  <NavButton href="#contact" onClick={handleEmailClick}>
                    {item.label}
                  </NavButton>
                </NavButtonContainer>
              ) : (
                <MenuItem>
                  <NavLink href={`#${item.id}`} onClick={handleLinkClick}>
                    {item.label}
                  </NavLink>
                </MenuItem>
              )}
            </Box>
          );
        })}
      </MenuList>
    </>
  );
};

export default NavMenu;
