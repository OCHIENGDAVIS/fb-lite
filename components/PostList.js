import Post from './Post';

const PostList = ({ posts }) => {
  const renderPosts = posts.posts?.map((post) => (
    <Post key={post._id} post={post} />
  ));
  return <div>{renderPosts}</div>;
};

export default PostList;
