"use client";

import { Global, css } from "@emotion/react";

import emotionReset from "emotion-reset";

import { useTheme } from "@emotion/react";

export function GlobalStyle() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          background-color: ${theme.color.grey["30"]};
        }

        body,
        * {
          font-family: "SUITE", sans-serif;
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
