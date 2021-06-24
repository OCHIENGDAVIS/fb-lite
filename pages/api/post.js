import db_connect from '../../utils/db';
import Post from '../../models/Post';

const post = async (req, res) => {
  console.log(req.body);
  if (req.method === 'POST') {
    try {
      db_connect();
      await Post.create(req.body);
      return res.status(200).json({ message: 'things are good' });
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};
export default post;
