var mongoose = require('mongoose'),
    schema=mongoose.Schema,
    movieSchema=new schema({
    id:{type:Number,index : 1,unique:true,required:true},
    name:String,
    embedded:String,
    location:String,
    band:String,
    song:String,
    concert_name:String,
    concert_date:String,
    number_of_views:Number,
    upload_date:String,
    },{collection:'Movies'});

    var Movie=mongoose.model('Movie',movieSchema);

    module.exports= Movie;