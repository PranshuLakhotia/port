import type { Metadata, Viewport } from "next";
import ThemeProvider from "../../lib/ThemeProvider";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pranshu Lakhotia - Full Stack Developer",
  description: "Professional portfolio of Pranshu Lakhotia - Full Stack Developer specializing in React, Next.js, and AI/ML technologies",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, AI, ML, Portfolio",
  authors: [{ name: "Pranshu Lakhotia" }],
  openGraph: {
    title: "Pranshu Lakhotia - Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and skills",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranshu Lakhotia - Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects and skills",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
