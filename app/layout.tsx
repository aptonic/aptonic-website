import "./globals.css";
import cx from "classnames";
import { sfPro, sfProLight, inter, roboto } from "./fonts";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Paddle from "@/components/shared/paddle";
import Mouseflow from "@/components/shared/google-analytics";
import GoogleAnalytics from "@/components/shared/google-analytics";

export const metadata = {
  title: "Aptonic - Dropzone 4",
  description:
    "Aptonic create awesome apps for the Mac. We make Dropzone, an app which makes it faster and easier to move and copy files, launch applications, upload to many different services, and more.",
  keywords: [
    "Macintosh",
    "macOS",
    "Mac",
    "FTP",
    "SFTP",
    "Amazon S3",
    "S3",
    "Stash",
    "Shorten URLs",
    "Software",
    "Dropzone",
    "Dropzone 4",
    "Productivity",
    "Upload",
    "Share",
    "Drop Bar",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`overflow-scroll ${cx(
          sfPro.variable,
          sfProLight.variable,
          roboto.variable,
          inter.variable,
        )}`}
      >
        <div className="fixed -z-10 h-screen w-full bg-gradient-to-tl from-violet-100 via-white to-violet-100" />
        <Navbar isBlog={false} />
        <main className="flex min-h-screen w-full flex-col items-center">
          {children}
        </main>
        <Footer />
        <Paddle />
        <GoogleAnalytics GA_TRACKING_ID="GTM-M6C928LW" />
      </body>
    </html>
  );
}
