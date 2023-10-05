// index.js

import { ColorModeScript, LightMode } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <>
    <App />
  </>
);
