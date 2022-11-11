import Link from "next/link";

export default function Navbar({ items }) {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li>
            <Link href={`/`}>All</Link>
          </li>
          {items?.map((i) => (
            <li key={i}>
              <Link
                href={`/category/${i
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/\./, "")}`}
              >
                {i}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
