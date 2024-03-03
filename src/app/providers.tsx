"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { theme, GlobalStyle } from "@/style";

export default function Providers({ children }: { children: ReactNode }) {
  const { push } = useRouter();

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userNumber = localStorage.getItem("userNumber");

    if (!userName || !userNumber) push("/intro");
  }, []);

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
  padding: 0 20px;
  position: relative;
`;
