import { Estedad, Schibsted_Grotesk } from "next/font/google";

export const estedad = Estedad({
  subsets: ["arabic", "latin"],
  variable: "--font-estedad",
  display: "swap",
  adjustFontFallback: false,
});

export const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});
