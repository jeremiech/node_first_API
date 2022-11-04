const express = require("express");
const router = express.Router();
const Post = require("../model/Posts");

router.get("/",async (req, res) => {
    try{
      const posted=await Post.find()
      res.json(posted)
    }catch(e){
      res.json({message:e.message})
    }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
try{
    const savedPost=await post.save()
    res.json(savedPost)
}catch(e){
    res.json(e.message)
}
});

//remove the saved post API
router.delete('/:id',async (req,res)=>{
try{
  const postRemoved=await Post.remove({_id:req.params.id})
  if(postRemoved) res.json(postRemoved)
}catch(e){
  console.error(e.message)
}
})


router.get('/:id',async(req,res)=>{
  try{
    const post=await Post.findById(req.params.id)
    if(post)
    res.json(post)
    else
    res.json({message:"there\'s no id found "})
  }catch(e){
    res.json({message:e.message})
  }
})



//update the post
router.patch('/:id',async (req,res)=>{
try{
const updatedPost=await Post.updateOne({_id:req.params.id},{
  $set:{title:req.body.title}
})
res.json(updatedPost)
}catch(e){
  res.json(e.message)
}
})


module.exports = router;
