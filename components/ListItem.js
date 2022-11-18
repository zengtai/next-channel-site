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
            placeholder={`blur`}
            blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`}
          />
          <div className="meta">
            <h3 className="t">{item.title}</h3>
            <div className="i">
              <div className="r">{item.rating}</div>
              <span className="p">{item.played}</span>
            </div>
            <span className="c">{item.category}</span>
          </div>
          {/* <div className="go">
            <div className="btn">
              <span>PLAY</span>
            </div>
          </div> */}
          <div className="go">
            <b></b>
          </div>
        </Link>
      </li>
    </>
  );
}
