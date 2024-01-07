import { Body, NavButton } from "../../../common/UI";
import { Box } from "../../../common/UI/Layout";
import {
  MenuItem,
  MenuList,
  // MobileMenuList,
  // MobileNavContainer,
} from "../navbar.style";

type NavMenuProps = {
  isOpen: boolean;
};

const NavMenu = ({ isOpen }: NavMenuProps) => {
  const menuItems = [
    { label: "About", id: "about" },
    { label: "Technology", id: "technology" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <MenuList isOpen={isOpen}>
        {menuItems.map((item) => {
          const isButton = item.id === "contact";
          return (
            <Box key={item.id}>
              {isButton ? (
                <NavButton>
                  <Body fontWeight="bold">{item.label}</Body>
                </NavButton>
              ) : (
                <MenuItem>
                  <Body fontWeight="bold">{item.label}</Body>
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
