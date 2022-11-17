import { Fragment } from "react";
import Banner from "./Banner";
import ListItem from "./ListItem";

export default function GameList({ items, className, slot }) {
  return (
    <ul className={`game-list` + (className ? ` ${className}` : ``)}>
      {items.map((i, index) =>
        items.length < 6 ? (
          <ListItem key={i.slug} item={i} />
        ) : (
          <Fragment key={i.slug}>
            <ListItem item={i} />
            {index % 6 === 0 && index > 5 && index < 25 ? (
              <li>
                <Banner
                  auto
                  // format={`horizontal`}
                  // format={`fluid`}
                  // layoutKey={`-gb+x-4h-bo+12c`}
                  // responsive={false}
                  // style={{ display: `block` }}
                  key={Math.random()}
                  slot={slot}
                />
              </li>
            ) : null}
          </Fragment>
        )
      )}
    </ul>
  );
}
