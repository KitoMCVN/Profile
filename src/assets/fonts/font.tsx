import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

export const mainFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const secondaryFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
