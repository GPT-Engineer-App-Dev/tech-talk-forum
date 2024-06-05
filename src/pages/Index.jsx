import { Box, Container, Flex, Heading, HStack, IconButton, Input, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            TechForum
          </Heading>
        </Flex>
        <Spacer />
        <HStack spacing={5} display={{ base: "none", md: "flex" }}>
          <Link href="#">Home</Link>
          <Link href="#">Categories</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
        <Spacer />
        <Input placeholder="Search topics..." maxW="200px" />
      </Flex>

      {/* Main Content Area */}
      <Box mt={10}>
        <Heading as="h2" size="xl" mb={5}>
          Forum Categories
        </Heading>
        <VStack spacing={5} align="stretch">
          {["General", "Hardware", "Software", "Networking"].map((category) => (
            <Box key={category} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{category}</Heading>
              <Text mt={4}>Number of posts: 10</Text>
              <Text>Latest activity: 1 hour ago</Text>
            </Box>
          ))}
        </VStack>
        <Flex justify="center" mt={10}>
          <IconButton colorScheme="teal" aria-label="Create new post" icon={<FaPlus />} />
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" py={10} mt={10} bg="gray.700" color="white">
        <Flex justify="space-between" align="center">
          <HStack spacing={5}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Help</Link>
          </HStack>
          <HStack spacing={5}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;