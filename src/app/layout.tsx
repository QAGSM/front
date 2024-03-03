import Providers from "./providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gsm-qagsm.vercel.app"),
  applicationName: "QAGSM",
  title: "QAGSM",
  description: "GSM 신입생들을 위한 모든 질문을 답변을 해드립니다!! 🏫",
  openGraph: {
    title: "QAGSM",
    description: "GSM 신입생들을 위한 모든 질문을 답변을 해드립니다!! 🏫",
    url: "https://gsm-qagsm.vercel.app",
    siteName: "QAGSM",
    images: [
      {
        url: "/images/openGraph.png",
      },
    ],
    locale: "ko",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
