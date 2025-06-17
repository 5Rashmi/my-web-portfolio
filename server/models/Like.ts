// models/like.ts
import mongoose, { Document, Model } from "mongoose";

interface ILike extends Document {
    users: string[];
  count: number;
}

const likeSchema = new mongoose.Schema<ILike>({
    users: [String],
  count: { type: Number, default: 0 },
});

const Like: Model<ILike> = mongoose.models.Like || mongoose.model<ILike>("Like", likeSchema);
export default Like;
