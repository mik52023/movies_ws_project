var mongoose = require('mongoose'),
    schema=mongoose.Schema,
    movieSchema=new schema({
    id:{type:Number,index : 1,unique:true,required:true},
    name:String,
    embedded:String,
    location:String
    },{collection:'Movies'});

    var Movie=mongoose.model('Movie',movieSchema);

    module.exports= Movie;