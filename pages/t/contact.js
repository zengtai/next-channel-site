import Head from "next/head";
import Layout from "../../components/Layout";
import { getData } from "../../lib/api";
import { SITE_META } from "../../lib/constants";

export default function Contact({ data }) {
  return (
    <>
      <Head>
        <title>{`Contact | ${SITE_META.NAME}`}</title>
      </Head>
      <Layout navItems={data}>
        <div className="page">
          <h1 className="page-title">Contact</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <p>
          Address: <br />
          UNIT 408B, UPPOSUN PLAZA, 28 CANTONROAD, TSIMSHATSUI, KOWLOON, HONG
          KONG
        </p>
        <p>
          China Office:
          <br />
          Gaoxin 1st Road 18th, Gaoxin district, Xi'an, Shaanxi province, China
        </p>
        <p>
          Business Contact:
          <br />
          Fred@adbeegroup.com
        </p>
        <p>
          Developer Contact:
          <br />
          cathy@adbeegroup.com
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
