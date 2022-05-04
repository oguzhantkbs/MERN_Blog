import mongoose from 'mongoose'

const postSchema = mongoose.Schema({  // mongoDB Collection like SQL tables 
    title: String,
    subtitle: String,
    content: String,
    tag: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const Post = mongoose.model("Post", postSchema); // create a model name Post

export default Post