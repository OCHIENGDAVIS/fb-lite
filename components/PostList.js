import mongoose from 'mongoose';
import Post from './Post';

const PostModel = mongoose.model('Post');
function PostList({ posts }) {
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  console.error(req);
  return {
    props: {
      posts: [],
    },
  };
}

export default PostList;
