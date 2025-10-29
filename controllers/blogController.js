const Blog = require("../modles/blogModel");

const blogList = async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
};

const blogDetail = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json("Blog not fonund!");
    }
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const blogCreate = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).json({ message: "All filed are required!" });
  }
  const blog = await Blog.create({ title, content });
  res.status(201).json(blog);
};

const blogUpdate = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found!" });
    }
    const blogUpdate = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(blogUpdate);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const blogDelete = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not fonund!" });
    }
    await blog.deleteOne();
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  blogList,
  blogDetail,
  blogCreate,
  blogUpdate,
  blogDelete,
};
