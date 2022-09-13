import Head from 'next/head';
// import { Blogs } from '../components/Global/Blogs';

export default function Home({ articles }) {
  return (
    <div className="">
      <Head>
        <title>WebXDAO</title>
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=webxdao', {
    method: 'GET',
  });
  const articles = await res.json();
  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
}
