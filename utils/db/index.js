import mongoose from 'mongoose';
const db_connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database connected!!!');
  } catch (err) {
    console.log('DATABASE ERROR');
    console.log(err);
    process.exit(1);
  }
};
export default db_connect;
