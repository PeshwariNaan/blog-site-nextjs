import PostItem from '../post-item/PostItem';
import classes from './posts-grid.module.css';

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
export default PostsGrid;
