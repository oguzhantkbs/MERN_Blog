import express from 'express'
import { getPosts, createPost, getSinglePost } from '../controllers/posts.js'

const router = express.Router();

//http://localhost:5000/posts
//GET, POST, DELETE, UPDATE, PATCH

router.get("/", getPosts)
router.get("/:id", getSinglePost)
router.post("/", createPost)



export default router