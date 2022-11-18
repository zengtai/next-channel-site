import Head from "next/head";
import Layout from "../../components/Layout";
import { getData } from "../../lib/api";
import { SITE_META } from "../../lib/constants";

export default function About({ data }) {
  return (
    <>
      <Head>
        <title>{`About | ${SITE_META.NAME}`}</title>
      </Head>
      <Layout navItems={data}>
        <div className="page">
          <h1 className="page-title">About</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <p>
          We are committed to developing the most creative html5 games so that
          users don't have to worry about downloading and updating, our team has
          rich experience in game development, we capture the hottest ideas from
          social networks, app stores and our life kind every day and show them
          off. We are in Hong Kong . Welcome to visit us!
        </p>
        <p>
          Enjoy the latest and hottest html5 casual games that you can play on
          mobile, tablet and PC for FREE, without the hassle of downloading the
          games. Each game loads lighting fast, we believe you will like it.
          Running games, adventure games, car racing, riding, shooting games,
          fighting games, sports games, matching, gold mining, puzzle games, and
          many baby games including cooking games, doctor; dress up, makeup,
          jewel games.
        </p>`,
            }}
          />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await getData(`category`);

  return {
    props: {
      data,
    },
  };
};
