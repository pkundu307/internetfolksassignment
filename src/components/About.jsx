import React, { useState, useEffect } from "react";
import { Grid, GridItem, Image, Text, Button, Box } from "@chakra-ui/react";

const About = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 375);
  const [pt, setPt] = useState(isMobileView ? "803px" : "103px");

  // Update isMobileView and pt when the window width changes
  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth <= 375;
      setIsMobileView(newIsMobileView);
      setPt(newIsMobileView ? "803px" : "103px");
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box paddingX="20px" pt={"670px"} >
      <Grid templateColumns="1fr 1fr auto 1fr 1fr" gap={4} bg="#F0F1F7" >
        <GridItem colSpan={2} h={{ base: "auto", md: "570px" }} bg="#F0F1F7">
          {!isMobileView && (
            <Image
              display={{ base: "none", md: "block" }}
              maxH="100%"
              objectFit="cover"
              pl="205px"
              pr="100px"
              pb="1px"
              src="about.png"
            />
          )}
        </GridItem>
        <GridItem colSpan={1} h="10" bg="transparent" />
        <GridItem colSpan={2} h="500" bg="#F0F1F7">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: pt, // Dynamic padding top
              justifyContent: "flex-start",
              alignContent:"center",
              height: "100%",
              padding: "12px",
            }}
          >
            <Text fontSize="4xl" color="#0E2368" fontWeight="bold" mb="4">
              About Us
            </Text>
            <Text fontSize="lg" mb="4">
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s, when an unknown{" "}
              <br /> printer took a galley of type and scrambled it to make a type
              <br /> specimen book. It has survived not only five centuries.
            </Text>
            <Button
              bgColor="#E23744"
              borderRadius="full"
              color="white"
              _hover={{ bgColor: "#C4262E" }}
              width="247px"
            >
              Read More
            </Button>
          </div>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
