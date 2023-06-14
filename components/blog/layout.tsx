import "../../app/globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import Navbar from "../layout/navbar";

export default function Layout({ children }) {
  return (
    <>
    <Navbar isBlog={true} />
    <main className="flex min-h-screen w-full flex-col items-center">
      {children}
    </main>
    <Footer />
    </>
  );
}
