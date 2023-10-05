import React from "react";
import { Box,Text,Button,Image } from "@chakra-ui/react";

const Body = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }} // Column layout in mobile, row layout in desktop
      height="100vh" // Set the height to cover the entire viewport
    >
      {/* Second Box (Mobile Version) */}
      <Box
        flex="1" // Take up all available space
        backgroundColor=""
        p={4}
        display={{ base: "block", md: "none" }} // Show in mobile, hide in desktop
      >
        {/* Content for the second box */}
        <Box
        width="735px"
        height="804px"
        position="relative"
        // Make the Box a positioning context for the overlay
      >
        {/* Button in Top-Right Corner */}
      
      
        {/* Image */}
        <img
          borderRadius="0px 0px 0px 198.9px"
          src="Rectangle400.png"
          pl="705px"
          alt="Image Alt Text"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      
        {/* Transparent CSS Layer */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          // backgroundColor="rgba(0, 0, 0, 0.3)" // Transparent black background
        >
          <img
            src="Vector 1.png"
            alt="Vector Image"
            style={{
              width: "762px",
              height: "839px",
            }}
          />
        </Box>
        <Button
        position="absolute"
        top="20px" // Adjust the top value to position the button vertically
        right="20px" // Adjust the right value to position the button horizontally
        bgColor="#E23744"
        borderRadius="100"
        borderColor="white" // Set the border color to white
        borderWidth="1px" // Add border width to make it visible
        color="white"
      >
        Get in Touch
      </Button>
      </Box>
      </Box>

      {/* First Box */}
      <Box
        flex="1" // Take up all available space
        backgroundColor=""
        p={4}
      >
        {/* Content for the first box */}
        <Box
        flex="1"
        backgroundColor="#FFFFFF"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="flex-start" // Left-align content
      >
        <Image
          src="logo.png"
          ml={100}
          alt="Logo"
          width="107px"
          h={"83px"}
        />
        <Box
          w="700px"
          height="207px" // Set the height to 69 pixels
          backgroundColor="white" // Background color
          pt={227}
          pl={100} // Padding to add space inside the box
        >
          <Text fontSize="lg" as="b" color="#0E2368" fontSize={"62px"}>
            Discover the <br />
            <span style={{ color: "red" }}>Best</span> Food <br />
            and Drinks
          </Text>
        </Box>

        {/* Vertical Space */}
        <Box mt={4}></Box>

        {/* Text 2 */}
        <Box
          width="345px"
          height="55px"
          top="260px"
          left="100px"
          position="relative"
        >
          <Text fontSize="lg" fontSize="16.44px" height="27.4px">
            Naturally made Healthcare Products for the <br />
            better care & support of your body.
          </Text>
        </Box>

        {/* Vertical Space */}
        <Box
          width="345px"
          height="55px"
          top="300px"
          left="100px"
          position="relative"
        >
          {/* Button */}
          <Button
            variant="solid"
            bg={"#E23744"}
            borderRadius={"100"}
            color={"white"}
          >
            Explore Now!
          </Button>
        </Box>
      </Box>
      </Box>

      {/* Second Box (Desktop Version) */}
      <Box
        flex="1" // Take up all available space
        backgroundColor=""
        p={2}
        display={{ base: "none", md: "block" }} // Show in desktop, hide in mobile
      >
        {/* Content for the second box */}
        <Box
        width="735px"
        height="804px"
        position="relative"
        // Make the Box a positioning context for the overlay
      >
        {/* Button in Top-Right Corner */}
      
      
        {/* Image */}
        <img
          borderRadius="0px 0px 0px 198.9px"
          src="Rectangle400.png"
          pl="705px"
          alt="Image Alt Text"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      
        {/* Transparent CSS Layer */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          // backgroundColor="rgba(0, 0, 0, 0.3)" // Transparent black background
        >
          <img
            src="Vector 1.png"
            alt="Vector Image"
            style={{
              width: "762px",
              height: "839px",
            }}
          />
        </Box>
        <Button
        position="absolute"
        top="20px" // Adjust the top value to position the button vertically
        right="20px" // Adjust the right value to position the button horizontally
        bgColor="#E23744"
        borderRadius="100"
        borderColor="white" // Set the border color to white
        borderWidth="1px" // Add border width to make it visible
        color="white"
      >
        Get in Touch
      </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default Body;
