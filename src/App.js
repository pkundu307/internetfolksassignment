import React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Articles from "./components/Article";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />

    
      <Body />
      <About/>
      <Articles/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
