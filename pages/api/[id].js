import db_connect from '../../utils/db';
import Post from '../../models/Post';

const PostDetail = async (req, res) => {
  db_connect(req, res);
  const { method, query, body } = req;
  console.log(query);
  console.log(body);
  switch (method) {
    case 'PATCH':
      try {
        const response = await Post.findByIdAndUpdate(query.id, body, {
          new: true,
        });
        return res.json({ message: 'success', data: response.data });
      } catch (err) {
        return res
          .status(400)
          .json({ message: 'error', data: 'something went wrong' });
      }
    case 'DELETE':
      try {
        const response = await Post.findByIdAndDelete(query.id);
        return res.json({ message: 'success', data: response.data });
      } catch (err) {
        return res.status(400).json({ message: 'error', err });
      }
    default:
      return res
        .status(400)
        .json({ message: 'error', data: 'invalid request' });
      break;
  }
};

export default PostDetail;
