import mongoose, { model, Model, Schema } from "mongoose";

const userSchema = new Schema({
  image: String,
  name: String,
  username: String,
});

const replySchema = new Schema({
  content: String,
  replyingTo: String,
  user: userSchema,
});

const commentSchema = new Schema({
  id: Number,
  content: String,
  user: userSchema,
  replies: [replySchema],
});

const productRequestSchema = new Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: { type: Number, default: 0 },
  isLiked: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["planned", "in-progress", "live", "suggestion"],
    default: "suggestion",
  },
  description: String,
  comments: [commentSchema],
});

const ProductRequestModel: Model<any> =
  mongoose.models.ProductRequest ||
  model("ProductRequest", productRequestSchema);

export default ProductRequestModel;
