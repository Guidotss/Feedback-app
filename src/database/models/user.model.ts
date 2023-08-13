import mongoose, { Model, model, Schema } from "mongoose";

const currentUserSchema = new Schema({
  image: String,
  name: String,
  username: String,
});

currentUserSchema.index({ user: 1 });

const CurrentUserModel: Model<any> =
  mongoose.models.User || model("User", currentUserSchema);

export default CurrentUserModel;
