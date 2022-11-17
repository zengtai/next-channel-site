import { Fragment, useEffect, useState } from "react";
import Banner from "./Banner";
import ListItem from "./ListItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default function GameList({ items, className, slot, page }) {
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
        <div className="flex justify-center space-x-2 my-2" onClick={loadMore}>
          {/* <span className="bg-spinner bg-no-repeat bg-left bg-contain pl-6"> */}
          <div className="loading-spinner"></div>
          <p>Loading... {`(${data.length} / ${items.length})`}</p>
          {/* </span> */}
        </div>
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
              <li className="list-banner">
                {/* <Banner slot={slot} auto key={`${page}-${index}`} /> */}
                <Banner
                  auto
                  slot={`4544472056`}
                  // slot={slot}
                  format={`fluid`}
                  style={{ display: `block` }}
                  layoutKey={`-h5+2+1c-ar+gt`}
                  // layoutKey={`-hl-w+1e-4e+b7`}
                  // layoutKey={`-h4+u-2d-e0+y6`}
                  key={`${page}-${index}`}
                />
              </li>
            </Fragment>
          ) : (
            <ListItem key={i.slug} item={i} />
          )),
        }))}
      </ul>
    </InfiniteScroll>
  );
}
