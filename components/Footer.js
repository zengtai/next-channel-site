import Image from "next/image";
import Link from "next/link";
import { SITE_META } from "../lib/constants";
import Logo from "../public/images/brand/jojogames-logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav>
        <Link href={`/t/privacy`}>Privacy Policy</Link>
        <Link href={`/t/terms`}>Terms of Use</Link>
      </nav>
      <Image className="h-16 object-contain" src={Logo} alt={SITE_META.NAME} />
      <p
        className="container mx-auto text-sm"
        dangerouslySetInnerHTML={{
          __html: `Copyright &copy; ${
            new Date().getFullYear() + ` ` + SITE_META.NAME
          }`,
        }}
      />
    </footer>
  );
}
