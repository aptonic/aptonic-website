import "../../app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default function Layout({ children }) {
  return (
    <>
    <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
    <Nav />
    <main className="flex min-h-screen w-full flex-col items-center">
      {children}
    </main>
    <Footer />
    <Analytics />
    </>
  );
}
