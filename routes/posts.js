const express=require("express");
const router=express.Router();
const Post=require('../models/Post');


// GET ALL POSTS
router.get('/',async(req,res)=>
{
try
 {
    const posts = await Post.find();
    res.json(posts);

 }
 catch (err)
 {
    res.json({message:err});

 }


});
// ADD NEW POSTS 
router.post('/',async (req,res)=>
{   
      const post=new Post({
    Nom : req.body.Nom,
    Prenom : req.body.Prenom,
    Phone : req.body.Phone
});

console.log(req.body);
try{
   const savedPost= await post.save();
   res.json(savedPost);  
}
catch (err)
{
    res.json({message:err});
}

console.log(req.body);
});

// DELETE POST
router.delete('/:postId',async (req,res)=>{
try{

    const deleted= await Post.remove({_id:req.params.postId});
    res.json(deleted)  ;


}
catch(err )
{    res.json({message:err});


}}) ;


// UPDATE POST

router.patch('/:postId',async (req,res)=>{
    try{
    
        const deleted= await Post.updateOne({_id:req.params.postId},
            {$set : {Nom:req.body.Nom}});
        res.json(deleted)  ;
    
    
    }
    catch(err )
    {    res.json({message:err});
    
    
    }}) ;
    




module.exports=router;