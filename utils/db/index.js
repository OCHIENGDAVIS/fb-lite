import mongoose from 'mongoose';
const db_connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('database connected!!!');
  } catch (err) {
    console.log('DATABASE ERROR');
    console.log(err);
    return res.json({ message: 'Database not found!' });
  }
};
export default db_connect;
