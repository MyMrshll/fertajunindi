import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FERTA JUNINDI — Systems Engineer & Fullstack Developer",
  description:
    "Systems engineer and fullstack developer based in Indonesia. Portfolio of Ferta Junindi.",
};

export const viewport: Viewport = {
  themeColor: "#0E0926",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
