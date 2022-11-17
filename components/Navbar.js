import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ items }) {
  const router = useRouter();
  // console.log(`asPath`, router.asPath);
  // console.log(`pathname`, router.pathname);
  const path = router.asPath;
  const query = router.pathname;
  function toSlug(category) {
    return category.toLowerCase().replace(/ /g, "-").replace(/\./, "");
  }
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className={path === `/` ? `current` : ``}>
            <Link href={`/`}>All</Link>
          </li>
          {items?.map((i) => (
            <li
              key={i}
              className={path === `/category/${toSlug(i)}/` ? `current` : ``}
            >
              <Link href={`/category/${toSlug(i)}`}>{i}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
