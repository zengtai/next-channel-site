import { Fragment } from "react";
import Banner from "./Banner";
import ListItem from "./ListItem";

export default function GameList({ items, className, slot }) {
  return (
    <>
      <ul className={`game-list` + (className ? ` ${className}` : ``)}>
        {items.map((i, index) =>
          items.length < 6 ? (
            <ListItem key={i.id} item={i} />
          ) : (
            <Fragment key={i.id}>
              <ListItem item={i} />
              {index % 6 === 0 && index > 5 ? (
                <li>
                  <Banner
                    auto
                    format={`fluid`}
                    layoutKey={`-gb+x-4h-bo+12c`}
                    key={Math.random()}
                    slot={slot}
                  />
                </li>
              ) : null}
            </Fragment>
          )
        )}
      </ul>
    </>
  );
}
