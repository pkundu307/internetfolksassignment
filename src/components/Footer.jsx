import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#F8F8F8" py={6}>
      <Container maxW="container.xl">
        <Flex
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justify={{ base: "center", md: "space-between" }}
          align="center"
        >
          {/* 1st Section - Logo */}
          <Box
            flexBasis={{ base: "100%", md: "25%" }}
            mb={{ base: 4, md: 0 }}
            textAlign={{ base: "center", md: "left" }} // Center text on mobile, align left on desktop
          >
            <Image src="/logo.png"/>
          </Box>

          {/* 2nd Section - Contact Info */}
          <Box flexBasis={{ base: "100%", md: "25%" }} mb={{ base: 4, md: 0 }}>
            <Text fontWeight="bold">Contact Info</Text>
            <Text>
              Address: 123 Main St <br />
              Email: info@example.com <br />
              Phone: +1 123-456-7890
            </Text>
          </Box>

          {/* 3rd Section - More */}
          <Box flexBasis={{ base: "100%", md: "25%" }} mb={{ base: 4, md: 0 }}>
            <Text fontWeight="bold" color={"blue.900"}>
              More
            </Text>
            <VStack align={{ base: "", md: "start" }} spacing={2}>
              <Link>About Us</Link>
              <Link>Products</Link>
              <Link>Career</Link>
              <Link>Contact Us</Link>
            </VStack>
          </Box>

          {/* 4th Section - Social Links */}
          <Box flexBasis={{ base: "100%", md: "25%" }}>
          <Text
            fontWeight="bold"
            display={{ base: "none", md: "block" }} // Hide on mobile, show on desktop
          >
            Social Links
          </Text>
          <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
            <Link>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </HStack>
        </Box>
        
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
