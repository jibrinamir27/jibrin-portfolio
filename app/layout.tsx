import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioMotionProvider } from "@/components/MotionPrimitives";
import { PROFILE } from "@/lib/portfolio-data";

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
    default: `${PROFILE.fullName} — ${PROFILE.title}`,
    template: `%s | ${PROFILE.fullName}`,
  },
  description:
    "Backend-focused software developer specializing in Java, Spring Boot, PostgreSQL, REST APIs, and Keycloak authentication. Building reliable software systems, one API at a time.",
  keywords: [
    "Jibrin Adamu Ahmed",
    "Backend Software Developer",
    "Java Developer",
    "Spring Boot Engineer",
    "PostgreSQL",
    "Keycloak",
    "REST API",
    "Software Engineer Nigeria",
    "Ahmadu Bello University",
    "ByteWorks Technology Solutions",
  ],
  authors: [{ name: PROFILE.fullName }],
  creator: PROFILE.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${PROFILE.fullName} — ${PROFILE.title}`,
    description:
      "Building reliable software systems, one API at a time. Java, Spring Boot, PostgreSQL, REST APIs, and Keycloak authentication.",
    siteName: `${PROFILE.fullName} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.fullName} — ${PROFILE.title}`,
    description:
      "Backend Software Developer focused on Java, Spring Boot, PostgreSQL, REST APIs, and Keycloak.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#080B10] text-slate-100 selection:bg-sky-400/30 selection:text-sky-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-sky-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>
        <PortfolioMotionProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </PortfolioMotionProvider>
      </body>
    </html>
  );
}
