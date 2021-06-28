import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    date: { type: Date, default: Date.now },
    posts: [
      {
        id: mongoose.Types.ObjectId,
        ref: 'Post',
      },
    ],
    friends: [
      {
        id: mongoose.Types.ObjectId,
        email: String,
      },
    ],
  },
  { timestamp: true }
);
mongoose.models.Post || mongoose.model('User', UserSchema);
