const Comment = require("../models/Comment");

const addComment = async(req,res)=>{
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
};

const getComments = async(req,res)=>{
    const comments = await Comment.find({
        postId:req.params.postId
    });

    res.json(comments);
};

module.exports = {
    addComment,
    getComments
};