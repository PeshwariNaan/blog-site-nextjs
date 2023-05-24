import AllPosts from '@/components/posts/all-posts/AllPosts';
import { getAllPosts } from '@/lib/post-util';

const AllPostsPage = (props) => {
  return (
    <>
      <AllPosts posts={props.posts} />
    </>
  );
};
export default AllPostsPage;

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
