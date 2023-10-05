import React, { useState } from "react";
import { Box, Text, Button, SimpleGrid, Image } from "@chakra-ui/react";

// Sample article data
const articles = [
  {
    image: "about1.png",
    title: "Grilled Tomatoes at Home",
    content: "This is the content of Article 1.",
  },
  {
    image: "about2.png",
    title: "Snacks for Travel",
    content: "This is the content of Article 2.",
  },
  {
    image: "about3.png",
    title: "Post-workout Recipies",
    content: "This is the content of Article 2.",
  },
  {
    image: "about4.png",
    title: "How To Grill Corn",
    content: "This is the content of Article 2.",
  },
  {
    image: "about5.png",
    title: "Crunchwrap Supreme",
    content: "This is the content of Article 2.",
  },
  {
    image: "about6.png",
    title: "Broccoli Cheese Soup",
    content: "This is the content of Article 2.",
  },
  // Add more articles here...
];

const ArticlesPerPage = 3;

const LatestArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ArticlesPerPage;
  const endIndex = startIndex + ArticlesPerPage;

  const visibleArticles = articles.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < Math.ceil(articles.length / ArticlesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box p={4} pt={"180px"}>
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb={4}
        width="461px"
        height="84px"
        top="1615px"
        left="1554px"
        color={"#0E2368"}
      >
        Latest Articles
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {visibleArticles.map((article, index) => (
          <Box
  key={index}
  p={4}
  boxShadow="base"
  bg="white"
  borderRadius="md"
  display="flex"
  flexDirection="column"
  alignItems="center"
  width="100%"
  textAlign="center"
  border="1px solid black" // Add border property
>
  <Image src={article.image} alt={article.title} mb={4} />
  <Text
    fontSize="xl"
    fontWeight="bold"
    mb={2}
    color={"#0E2368"}
    fontFamily="Poppins"
    fontSize="21px"
    fontWeight="700"
    lineHeight="27px"
    letterSpacing="0em"
    textAlign="left"
  >
    {article.title}
  </Text>

  <Text>{article.content}</Text>
  <Button borderRadius="full" borderColor="black" mt={4}>
    Read More
  </Button>
</Box>

        ))}
      </SimpleGrid>
      <Box mt={4} textAlign="center">
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          variant="outline"
          mr={2}
        >
          {"<"}
        </Button>
        {currentPage}/{Math.ceil(articles.length / ArticlesPerPage)}
        <Button
          onClick={handleNext}
          disabled={
            currentPage === Math.ceil(articles.length / ArticlesPerPage)
          }
          ml={2}
        >
          {">"}
        </Button>
      </Box>
    </Box>
  );
};

export default LatestArticles;
