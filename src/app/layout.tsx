import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaunchPad | Heuser College",
  description: "Opportunity Hub for Heuser College",

  openGraph: {
    title: "LaunchPad | Heuser College",
    description: "Opportunity Hub for Heuser College",
    url: "https://heuserlaunchpad.vercel.app",
    siteName: "LaunchPad",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LaunchPad App",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LaunchPad | Heuser College",
    description: "Opportunity Hub for Heuser College",
    images: ["/og-image.png"],
  },

  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
