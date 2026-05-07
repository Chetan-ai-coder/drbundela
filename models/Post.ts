import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPost extends Document {
  title: string;
  titleHindi: string;
  slug: string;
  content: string;
  contentHindi: string;
  excerpt: string;
  excerptHindi: string;
  coverImage: string;      // image URL
  author: string;          // e.g. "Dr. Bundela"
  category: string;        // e.g. "Homeopathy", "Health Tips"
  tags: string[];          // e.g. ["skin", "immunity"]
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title:       { type: String, required: true },
    titleHindi:   { type: String, required: true },
    slug:        { type: String, required: true, unique: true },
    content:     { type: String, required: true },
    contentHindi: { type: String, required: true },
    excerpt:     { type: String, required: true },
    excerptHindi: { type: String, required: true },
    coverImage:  { type: String, required: true },
    author:      { type: String, default: "Dr. Bundela" },
    category:    { type: String, default: "Homeopathy" },
    tags:        [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;