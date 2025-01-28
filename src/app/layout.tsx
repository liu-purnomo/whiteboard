import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "../globals.css";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Whiteboard",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link href="/logo.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/logo.png" rel="icon" sizes="16x16" type="image/png" />
      </head>
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
