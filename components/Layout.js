import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ navItems, children }) {
  return (
    <div className="wrapper flex min-h-screen flex-col">
      <Navbar items={navItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
