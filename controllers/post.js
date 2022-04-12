const express = require('express')
const router = express.Router()
const Post = require('../models/blogs')

// Index Route
router.get('/', (req, res) =>{
    Post.find({}, (err, foundPosts)=>{
        res.json(foundPosts)
    })
})

// Delete Route
router.delete('/:id', (req, res)=>{
    Post.findByIdAndRemove(req.params.id, (err, deletedPost)=>{
        res.json(deletedPost)
    })
})

// Update Route
router.put('/:id', (req, res)=>{
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost)=>{
        res.json(updatedPost)
    })
})

// Create route
router.post('/', (req, res)=>{
    Post.create(req.body, (err, createdPost)=>{
        res.json(createdPost) //.json() will send proper headers in response so client knows it's json coming back
    })
})

// Show Route
router.get('/:id', (req, res)=>{
    Post.findById(req.params.id, (err, foundPost)=>{
        res.json(foundPost)
    })
})

module.exports = router