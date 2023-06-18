import "./globals.css";
import cx from "classnames";
import { sfPro, sfProLight, inter, roboto } from "./fonts";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Paddle from "@/components/shared/paddle";

export const metadata = {
  title: "Aptonic - Dropzone 4",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Paddle />

      <body className={cx(sfPro.variable, sfProLight.variable, roboto.variable, inter.variable)}>
        <div className="fixed -z-10 h-screen w-full bg-gradient-to-tl  from-violet-100 via-white to-violet-100" />
        <Navbar isBlog={false} />
        <main className="flex min-h-screen w-full flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
