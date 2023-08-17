import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

import Link from "next/link";
const Links = ["Dashboard", "Projects", "Team"];

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link key={"/"} href={""}>
              Home
            </Link>
          </HStack>
        </HStack>
        {/* <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            ></MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
