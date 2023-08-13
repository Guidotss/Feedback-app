import mongoose, { Model, model, Schema } from "mongoose";
import { FeedBack } from "@/interface";

const feedBackSchema = new Schema({
  currentUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  productRequests: {
    type: [Schema.Types.ObjectId],
    ref: "ProductRequest",
  },
});

const FeedBackModel: Model<FeedBack> =
  mongoose.models.FeedBack || model("FeedBack", feedBackSchema);
export default FeedBackModel;
