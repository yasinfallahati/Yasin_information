import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasin Fallahati — Automation · Local-first AI · Full-stack",
  description:
    "Portfolio of Yasin Fallahati — AI engineer & Python developer. Automation, local-first products, and full-stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
