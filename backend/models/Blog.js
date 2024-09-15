const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bloggerName: { type: String, required: true },
  blogDate: { type: Date, default: Date.now },
  comments: [commentSchema],
  aboutBlog: String,
  blogImage: String,  // URL for the blog image
  bannerImage: String,
  aboutBlogger: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
