import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <App />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  </ChakraProvider>,
  document.getElementById("root")
);
