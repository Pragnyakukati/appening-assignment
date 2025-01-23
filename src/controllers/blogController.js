const Blog = require("../models/Blog");

// Create Blog
exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = new Blog({ title, content, author: req.user.id });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};

// Assign Blog to Editor
exports.assignEditor = async (req, res) => {
  const { blogId, editorId } = req.body;
  try {
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.assignedEditor = editorId;
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error assigning editor", error });
  }
};
