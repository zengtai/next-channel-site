import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar({ items }) {
  const router = useRouter();
  // console.log(`asPath`, router.asPath);
  // console.log(`pathname`, router.pathname);
  const path = router.asPath;
  const [isOpen, setIsOpen] = useState(false);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  function toSlug(category) {
    return category.toLowerCase().replace(/ /g, "-").replace(/\./, "");
  }
  return (
    <nav className={`${isOpen ? "menu-open" : "menu-close"} navbar`}>
      <div className="container">
        <button onClick={handleClickMenu} className="btn">
          {isOpen ? `Close` : `Menu`}
        </button>
        <ul className="navbar-list">
          <li className={path === `/` ? `current` : ``}>
            <Link href={`/`}>Home</Link>
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
