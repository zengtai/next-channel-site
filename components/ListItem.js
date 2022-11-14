import Image from "next/image";
import Link from "next/link";
import { GAME_PATH, IMAGE_PATH, IMAGE_FORMAT } from "../lib/constants";

export default function ListItem({ item }) {
  return (
    <>
      <li className="list-item">
        <Link href={`/game/${item.slug}`} title={item.title}>
          <Image
            src={
              IMAGE_PATH + IMAGE_FORMAT + `/` + item.appid + `.` + IMAGE_FORMAT
            }
            alt={item.title}
            width={100}
            height={100}
          />
          <div className="meta">
            <div className="t">{item.title}</div>
            <div className="i">
              <div className="r">{item.rating}</div>
              <span className="p">{item.played}</span>
            </div>
            <span className="c">{item.category}</span>
          </div>
          <div className="go">
            <b></b>
          </div>
        </Link>
      </li>
    </>
  );
}
