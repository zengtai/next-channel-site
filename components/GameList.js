// import { Fragment, useEffect, useState } from "react";
// import Banner from "./Banner";
import ListItem from "./ListItem";
// import InfiniteScroll from "react-infinite-scroll-component";

export default function GameList({ items, className, slot, page }) {
  // const step = 6; // 增量
  // const init = items.slice(0, step);
  // const [isHasMore, setIsHasMore] = useState(true);
  // const [data, setData] = useState(init);

  // const total = items.length;

  // const loadMore = () => {
  //   const newData = items.slice(data.length, data.length + step);

  //   setData((data) => [...data, ...newData]);

  //   if (data.length >= total) {
  //     setIsHasMore(!isHasMore);
  //   }
  // };

  return (
    <ul className={`game-list` + (className ? ` ${className}` : ``)}>
      {items.map((i, index) => (
        <ListItem key={i.slug} item={i} />
      ))}
    </ul>
  );
}
