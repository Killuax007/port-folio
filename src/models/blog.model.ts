import mongoose, { Schema, Document } from "mongoose";

export interface Blog extends Document {
  title: string;
  href: string;
  published: string;
}
const BlogSchema: Schema<Blog> = new Schema({
  title: { type: String },
  href: { type: String },
  published: { type: String },
});
export const BlogModel =
  (mongoose.models.Blog as mongoose.Model<Blog>) ||
  mongoose.model<Blog>("Blog", BlogSchema);
