import Layout from "../components/Layout";
import { getData } from "../lib/api";

export default function custom404({ data }) {
  return (
    <Layout navItems={data}>
      <div className="container mx-auto">
        <h1 className="m-4 text-2xl">404</h1>
        <p className="mx-4">Page Not Found.</p>
      </div>
    </Layout>
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
