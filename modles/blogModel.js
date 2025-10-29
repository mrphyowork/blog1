const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the blog title"],
    },
    content: {
      type: String,
      required: [true, "Please add the blog content"],
    },
  },
  {
    timestamps: true,

    // add this block
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id.toString(); // copy _id into id
        delete ret._id; // remove _id
        delete ret._v; // optional: remove version key
      },
    },
  }
);

module.exports = mongoose.model("Blog", blogSchema);
