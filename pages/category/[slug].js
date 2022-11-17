import Head from "next/head";
import Banner from "../../components/Banner";
import GameList from "../../components/GameList";
import Layout from "../../components/Layout";
import { getData } from "../../lib/api";
import {
  SITE_META,
  ADS_SLOT_ID,
  ADSENSE_ID,
  TOP_GAMES,
} from "../../lib/constants";

export default function Category({ data }) {
  // console.log(`data: `, data);
  return (
    <>
      <Head>
        <title>{`${data.games[0].category} Games | ${SITE_META.NAME}`}</title>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </Head>

      <Layout navItems={data.categories}>
        <div className="category container mx-auto">
          <Banner slot={ADS_SLOT_ID.CATEGORY} auto key={Math.random()} />
          <header className="page-title">
            <h1
              dangerouslySetInnerHTML={{
                __html: `${data.games[0].category} Games`,
              }}
            />
            <span>{`Total: ${data.games.length}`}</span>
          </header>
          <GameList
            key={data.games[0].category}
            items={data.games}
            slot={ADS_SLOT_ID.CATEGORY}
            page={Math.random().toFixed(6)}
          />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const originData = await getData(`games`);

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

  function toSlug(cat) {
    return cat.toLowerCase().replace(/\./, ``).replace(/ /g, `-`);
  }
  let filteredGames = games.filter(
    (game) => toSlug(game.category) === ctx.params.slug
  );

  let topgames = TOP_GAMES.map((i) => i.appid);

  filteredGames.sort((a, b) =>
    topgames.indexOf(a.appid) < topgames.indexOf(b.appid) ? 1 : -1
  );
  const categories = await getData("category");

  return {
    props: {
      data: {
        games: filteredGames,
        categories,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const categories = await getData(`category`);

  return {
    paths: categories.map((i) => ({
      params: { slug: i.toLowerCase().replace(/\./, ``).replace(/ /g, `-`) },
    })),
    fallback: false,
  };
};
