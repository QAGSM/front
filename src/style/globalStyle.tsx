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
          background-color: ${theme.color.grey["20"]};
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
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

        html {
          overflow-x: hidden;
          @media (max-width: 599px) {
            font-size: 15px;
          }
          @media (max-width: 530px) {
            font-size: 14px;
          }
          @media (max-width: 490px) {
            font-size: 13px;
          }
          @media (max-width: 460px) {
            font-size: 12px;
          }
          @media (max-width: 420px) {
            font-size: 11px;
          }
          @media (max-width: 390px) {
            font-size: 10px;
          }
          @media (max-width: 350px) {
            font-size: 9px;
          }
          @media (max-width: 320px) {
            font-size: 8px;
          }
        }
      `}
    />
  );
}
