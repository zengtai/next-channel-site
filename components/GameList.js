import { Fragment, useEffect, useState } from "react";
import Banner from "./Banner";
import ListItem from "./ListItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default function GameList({ items, className, slot }) {
  const step = 6; // 增量
  const init = items.slice(0, step);
  const [isHasMore, setIsHasMore] = useState(true);
  const [data, setData] = useState(init);

  const total = items.length;

  const loadMore = () => {
    const newData = items.slice(data.length, data.length + step);

    setData((data) => [...data, ...newData]);

    if (data.length >= total) {
      setIsHasMore(!isHasMore);
    }
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={loadMore}
      hasMore={isHasMore}
      loader={
        <p className="text-center my-2">
          Loading... {`(${data.length} / ${items.length})`}
        </p>
      }
      endMessage={
        <p className="text-center mt-4 opacity-50">- No more games. -</p>
      }
    >
      <ul className={`game-list` + (className ? ` ${className}` : ``)}>
        {data.map((i, index) => ({
          ...(index > 5 && index % 6 === 0 ? (
            <Fragment key={i.slug}>
              <ListItem item={i} />
              <Banner slot={slot} auto key={Math.random()} />
            </Fragment>
          ) : (
            <ListItem key={i.slug} item={i} />
          )),
        }))}
      </ul>
    </InfiniteScroll>
  );
}
