import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AdsScript from "../../components/AdsScript";
// import Banner from "../../components/Banner";
import GameList from "../../components/GameList";
import Layout from "../../components/Layout";
import { getData } from "../../lib/api";
import {
  IMAGE_PATH,
  IMAGE_FORMAT,
  GAME_PATH,
  ADS_SLOT_ID,
  // ADSENSE_ID,
  TOP_GAMES,
  SITE_META,
} from "../../lib/constants";

export default function GameDetail({ data }) {
  // console.log(`data: `, data.slugs.join(`,`));
  return (
    <>
      <Head>
        <title>{`${data.currentGame.title} | ${SITE_META.NAME}`}</title>
      </Head>
      <AdsScript />
      <Layout navItems={data.categories}>
        <div className="detail">
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
          {/* <Banner slot={ADS_SLOT_ID.DETAIL} auto /> */}
          <div>
            <Link
              className="play-btn"
              href={GAME_PATH + data.currentGame.appid}
            >
              Play Now
            </Link>
          </div>
          <div className="description">
            <div className="t">About this game</div>
            <div className="c">{data.currentGame.description}</div>
          </div>
          <div>
            <GameList items={data.related} slot={ADS_SLOT_ID.DETAIL} />
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

  const slugs = games.map((i) => i.slug);
  return {
    props: {
      data: { categories, currentGame, related, slugs },
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
