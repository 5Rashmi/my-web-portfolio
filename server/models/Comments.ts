import mongoose, { Model } from "mongoose";

interface IComment extends Document {
  message: string;
  createdAt: Date;
}

const commentSchema = new mongoose.Schema<IComment>({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>("Comment", commentSchema);
export default Comment;
