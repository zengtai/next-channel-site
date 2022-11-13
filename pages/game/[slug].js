export default function GameDetail({ data }) {}

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};
