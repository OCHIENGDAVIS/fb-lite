import db_connect from '../../utils/db';

export default (req, res) => {
  db_connect();
  res.status(200).json({ name: 'John Doe' });
};
