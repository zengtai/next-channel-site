import { SITE_META } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p
        className="container mx-auto"
        dangerouslySetInnerHTML={{
          __html: `Copyright &copy; ${
            new Date().getFullYear() + ` ` + SITE_META.NAME
          }`,
        }}
      />
    </footer>
  );
}
