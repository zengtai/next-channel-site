import Banner from "./Banner";
import ListItem from "./ListItem";

export default function GameList({ items, className }) {
  return (
    <ul className={`game-list` + (className ? ` ${className}` : ``)}>
      {items.map((i, index) =>
        items.length < 6 ? (
          <ListItem key={i.slug} item={i} />
        ) : (
          <>
            <ListItem key={i.slug} item={i} />
            {index % 6 === 0 && index > 5 ? (
              <li>
                <Banner
                  auto
                  format={`fluid`}
                  layoutKey={`-gb+x-4h-bo+12c`}
                  key={Math.random()}
                />
              </li>
            ) : null}
          </>
        )
      )}
    </ul>
  );
}
