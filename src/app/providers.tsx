"use client";

import React from "react";

import { ThemeProvider } from "@emotion/react";

import { theme, GlobalStyle } from "@/style";

import styled from "@emotion/styled";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}

const Layout = styled.div`
  width: 100vw;
  max-width: 600px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.grey["30"]};
`;
