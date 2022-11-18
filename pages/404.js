import Head from "next/head";
import Layout from "../components/Layout";
import { getData } from "../lib/api";
import { SITE_META } from "../lib/constants";

export default function custom404({ data }) {
  return (
    <>
      <Head>
        <title>{`404 | ${SITE_META.NAME}`}</title>
      </Head>
      <Layout navItems={data}>
        <div className="container mx-auto">
          <h1 className="m-4 text-2xl">404</h1>
          <p className="mx-4">Page Not Found.</p>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const categories = await getData(`category`);

  return {
    props: {
      data: categories,
    },
  };
};
