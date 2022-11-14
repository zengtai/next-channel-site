import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Banner from "../../components/Banner";
import GameList from "../../components/GameList";
import Layout from "../../components/Layout";
import { getData } from "../../lib/api";
import {
  IMAGE_PATH,
  IMAGE_FORMAT,
  GAME_PATH,
  ADS_SLOT_ID,
  ADSENSE_ID,
  TOP_GAMES,
} from "../../lib/constants";

export default function GameDetail({ data }) {
  return (
    <>
      <Script
        id={`gads-init`}
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
      />
      <Layout navItems={data.categories}>
        <div className="detail container mx-auto">
          <div className="game mx-4 flex space-x-4">
            <Image
              className="rounded-xl"
              src={
                IMAGE_PATH +
                IMAGE_FORMAT +
                `/` +
                data.currentGame.appid +
                `.` +
                IMAGE_FORMAT
              }
              alt={data.currentGame.title}
              width={100}
              height={100}
              priority={true}
            />
            <div>
              <h1 className="text-2xl text-blue-50">
                {data.currentGame.title}
              </h1>
              <div className="my-1 text-xs">
                <span>{data.currentGame.category}</span>
              </div>
              <div>
                <span className="mr-2 bg-star bg-contain bg-left bg-no-repeat pl-5 text-lg text-yellow-300">
                  {data.currentGame.rating}
                </span>
                <span>{`${data.currentGame.played} played`}</span>
              </div>
            </div>
          </div>
          <Banner slot={ADS_SLOT_ID.DETAIL} auto />
          <div>
            <Link
              className="m-4 block rounded-lg border-b-4 border-lime-600 bg-lime-500 py-3 text-center text-xl font-bold text-white"
              href={GAME_PATH + data.currentGame.appid}
            >
              Play Now
            </Link>
          </div>
          <div className="relative m-4 overflow-hidden rounded-md bg-blue-600 after:absolute after:bottom-0 after:left-0 after:h-8 after:w-full after:bg-gradient-to-t after:from-blue-600">
            <div className="m-3 h-28">
              <div className="mb-2 border-b border-blue-700 pb-2 font-bold uppercase">
                About this game
              </div>
              {data.currentGame.description}
            </div>
          </div>
          <div>
            <GameList items={data.related} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const games = await getData(`games`);
  const categories = await getData(`category`);
  const currentGame = games.filter((i) => i.slug === ctx.params.slug)[0];
  let topgames = TOP_GAMES.map((i) => i.appid);
  const related = games
    .filter((i) => i.slug !== ctx.params.slug && topgames.includes(i.appid))
    .reverse()
    .slice(0, 6);
  return {
    props: {
      data: { categories, currentGame, related },
    },
  };
};

export const getStaticPaths = async () => {
  const games = await getData(`games`);
  const paths = games.map((i) => ({
    params: {
      slug: i.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
