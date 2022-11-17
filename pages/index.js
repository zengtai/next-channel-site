import Head from "next/head";
import Script from "next/script";
import Banner from "../components/Banner";
import GameList from "../components/GameList";
import Layout from "../components/Layout";
import { getData } from "../lib/api";
import {
  SITE_META,
  ADS_SLOT_ID,
  ADSENSE_ID,
  TOP_GAMES,
} from "../lib/constants";

export default function Home({ data }) {
  // console.log(`data: `, data.games);
  // console.log(`data: `, data.games.length);
  return (
    <>
      <Head>
        <title>{`All Games | ${SITE_META.NAME}`}</title>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </Head>

      <Layout navItems={data.categories}>
        <div className="home container mx-auto">
          <Banner slot={ADS_SLOT_ID.HOME} auto key={Math.random()} />
          <h2 className="sr-only">All Games</h2>
          <GameList items={data.games} slot={ADS_SLOT_ID.HOME} />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const originData = await getData(`games`);
  const categories = await getData("category");
  let games = [];
  originData.map((i) => {
    games.push({
      appid: i.appid,
      title: i.title,
      slug: i.slug,
      rating: i.rating,
      played: i.played,
      category: i.category,
    });
  });
  let topgames = [];
  TOP_GAMES.forEach((i) => (topgames[i.order - 1] = i.appid));
  console.log("topgames: ", topgames);
  // games.sort((a, b) =>
  //   topgames.indexOf(a.appid) < topgames.indexOf(b.appid) ? 1 : -1
  // );

  const Top15Games = games.filter((i) => topgames.includes(i.appid));

  function Top15Order(a, b) {
    let ao = TOP_GAMES.filter((i) => i.appid === a.appid)[0].order;
    let bo = TOP_GAMES.filter((i) => i.appid === b.appid)[0].order;
    return ao > bo ? 1 : -1;
  }

  Top15Games.sort((a, b) => Top15Order(a, b));
  console.log(`Top15Games: `, Top15Games);
  const OtherGames = games.filter((i) => !topgames.includes(i.appid));

  return {
    props: {
      data: {
        games: Top15Games.concat(OtherGames),
        categories,
      },
    },
  };
};
