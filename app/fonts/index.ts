import localFont from "next/font/local";
import { Inter, Roboto, Roboto_Condensed } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const sfProLight = localFont({
  src: "./SF-Pro-Display-Light.otf",
  variable: "--font-sf-light",
});

export const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: "--font-roboto",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
