import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    message: String,
    image: String,
    likes: [],
    comments: [],
    shares: [],
  },
  { timestamp: true }
);
export default mongoose.models['Post'] || model('Post', PostSchema);
