import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ navItems, children }) {
  return (
    <div className="wrapper">
      {/* <Navbar items={navItems} /> */}
      <main className="grow pt-4">{children}</main>
      <Footer />
    </div>
  );
}
