import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const sfProLight = localFont({
  src: "./SF-Pro-Display-Light.otf",
  variable: "--font-sf-light",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
