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

export const getSinglePost = async (req, res) => {
    try {
        console.log("REq", req)
        const { id } = req.params
        const post = await Post.findById(id)
        res.status(200).json(post) // if success return 200 code and get all datas from json type
    } catch (error) {
        console.log("Single Error")
        res.status(404).json({
            message: error.message
        })
    }
}

export const createPost = async (req, res) => {
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}


