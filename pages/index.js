import FeatruedPosts from '@/components/homepage/featured-posts/FeaturedPosts';
import Hero from '@/components/homepage/hero/Hero';
import { getFeaturedPosts } from '@/lib/post-util';

const HomePage = (props) => {
  return (
    <>
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
