import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { home, person } from "@/content/site";
import { SavedPostsProvider } from "@/context/saved-posts";
import { ThemeScript } from "@/context/ThemeScript";
import { ThemeProvider } from "@/context/theme";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: home.title,
    template: `%s — ${person.name}`,
  },
  description: home.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-dvh flex-col bg-background text-foreground">
        <ThemeProvider>
          <SavedPostsProvider>
            <Header />
            <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
              {children}
            </main>
            <Footer />
          </SavedPostsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
