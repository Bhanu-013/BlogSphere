const Post = require("../models/Post");

const createPost = async (req,res)=>{
    const post = await Post.create(req.body);
    res.status(201).json(post);
};

const getPosts = async (req,res)=>{
    const posts = await Post.find();
    res.json(posts);
};

const getPostById = async(req,res)=>{
    const post = await Post.findById(req.params.id);
    res.json(post);
};

const updatePost = async(req,res)=>{
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(post);
};

const deletePost = async(req,res)=>{
    await Post.findByIdAndDelete(req.params.id);
    res.json({message:"Post Deleted"});
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
};