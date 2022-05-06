import Post from '../models/posts.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find() // get all datas im my mongoose
        res.status(200).json(posts) // if success return 200 code and get all datas from json type
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createPost = async (req, res) => {
    const newPost = new Post(req.body)
    console.log("REq : ", newPost)
    try {
        await newPost.save()
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}


