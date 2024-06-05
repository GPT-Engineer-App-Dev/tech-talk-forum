import { Box, Container, Flex, Heading, HStack, IconButton, Input, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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
        <HStack spacing={5} display={{ base: "none", md: "flex" }}>
          <Link href="#">Home</Link>
          <Link href="#">Categories</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Input placeholder="Search topics..." size="sm" />
          <IconButton aria-label="Search" icon={<FaSearch />} size="sm" ml={2} />
        </Box>
      </Flex>

      {/* Main Content Area */}
      <VStack spacing={8} mt={10} align="stretch">
        <Heading as="h2" size="xl" textAlign="center">
          Forum Categories
        </Heading>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">General</Heading>
          <Text mt={4}>Posts: 120 | Latest Activity: 1 hour ago</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Hardware</Heading>
          <Text mt={4}>Posts: 80 | Latest Activity: 2 hours ago</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Software</Heading>
          <Text mt={4}>Posts: 150 | Latest Activity: 30 minutes ago</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Networking</Heading>
          <Text mt={4}>Posts: 60 | Latest Activity: 3 hours ago</Text>
        </Box>
        <Box textAlign="center">
          <IconButton aria-label="Create new post" icon={<FaSearch />} size="lg" colorScheme="teal">
            Create New Post
          </IconButton>
        </Box>
      </VStack>

      {/* Footer */}
      <Flex as="footer" py={4} mt={10} bg="teal.500" color="white" justify="space-between" align="center">
        <HStack spacing={5}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Help</Link>
        </HStack>
        <HStack spacing={5}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;