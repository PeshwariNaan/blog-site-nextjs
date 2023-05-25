import PostContent from '@/components/posts/post-detail/PostContent';
import { getContentData, getPostFiles } from '@/lib/post-util';
import Head from 'next/head';

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
};
export default PostDetailPage;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getContentData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    //We are generating all possible paths for the posts in advance.
    paths: slugs.map((slug) => ({ params: { slug: slug } })), //Syntax returns an immediate return object.
    fallback: 'blocking',
  };
};
