const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({
    Nom :{type :String ,
    required:true},
    Prenom : {type :String ,
        required:true},
    Phone : {type :String ,
        required:true}


});

module.exports=mongoose.model('Posts',PostSchema);
