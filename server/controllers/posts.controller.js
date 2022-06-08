import PostsMessage from '../models/posts/postsMessage.model.js'

export const getPosts = async (req, res) => {
    try {
        const postsMessage = await PostsMessage.find()
        res.status(200).json(postsMessage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostsMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}