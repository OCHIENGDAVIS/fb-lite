import db_connect from '../../utils/db';
import Post from '../../models/Post';
import User from '../../models/User';

import { getSession } from 'next-auth/client';

const post = async (req, res) => {
  db_connect(req, res);
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const session = await getSession({ req });
        if (!session) {
          return res
            .status(400)
            .json({ message: 'error', data: 'Access denied' });
        }
        req.body.user = session.user.id;
        const response = await Post.create(req.body);
        return res
          .status(200)
          .json({ message: 'success', data: response.data });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ message: 'error', err });
      }
    case 'GET':
      try {
        const posts = await Post.find().populate('user', User);
        return res.status(200).json({ message: 'success', posts });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ message: 'error', err });
      }
    default:
      return res
        .status(400)
        .json({ message: 'error', err: 'invalid request!' });
  }
};
export default post;
