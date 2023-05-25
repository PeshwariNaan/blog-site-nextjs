import FeatruedPosts from '@/components/homepage/featured-posts/FeaturedPosts';
import Head from 'next/head';
import Hero from '@/components/homepage/hero/Hero';
import { getFeaturedPosts } from '@/lib/post-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Josh&apos;s Blog</title>
        <meta
          name="description"
          content="I post about interesting front-end tech"
        />
      </Head>
      <Hero />
      <FeatruedPosts posts={props.posts} />
    </>
  );
};
export default HomePage;

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};
