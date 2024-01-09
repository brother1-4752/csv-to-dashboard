// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </RecoilRoot>
  // </React.StrictMode>
);
