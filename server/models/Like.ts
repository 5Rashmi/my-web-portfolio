// models/like.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface ILike extends Document {
  users: string[];
  count: number;
}

const likeSchema = new Schema<ILike>({
  users: {
    type: [String],
    default: [],
  },
  count: {
    type: Number,
    default: 0,
  },
});

const Like: Model<ILike> = mongoose.models.Like || mongoose.model<ILike>("Like", likeSchema);

export default Like;
