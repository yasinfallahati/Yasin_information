import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasin Fallahati — AI Engineer",
  description: "Portfolio of Yasin Fallahati — AI Engineer, Python Developer, and Automation Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
