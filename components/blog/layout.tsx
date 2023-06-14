import "../../app/globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default function Layout({ children }) {
  return (
    <>
    <Nav />
    <main className="flex min-h-screen w-full flex-col items-center">
      {children}
    </main>
    <Footer />
    </>
  );
}
