"use client";

import React from "react";

import { ThemeProvider } from "@emotion/react";

import { theme, GlobalStyle } from "@/style";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
