import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maurisha Fannani Saragih — Personal Portfolio",
  description:
    "Always learning. Always building. Explore Maurisha Fannani Saragih's work, projects, skills, and interests.",
  applicationName: "Maurisha Fannani Saragih Portfolio",
  openGraph: {
    title: "Maurisha Fannani Saragih",
    description: "Always learning. Always building.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
