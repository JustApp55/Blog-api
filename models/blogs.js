const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        createdAt: Date,
        body: String,
        comments: {name: String, message: String, date: Date}
    }
)

const Blogs = mongoose.model('Blog', blogSchema);

module.exports = Blogs

