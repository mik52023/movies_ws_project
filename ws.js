var mongoose = require('mongoose'),
    consts=require('./data/const.js');  
var Movie=require('./movieB.js');

module.exports= class Punk_Videos
{

// recieves location and destination response 
// and sends json with all movies related to that location
Get_all_movies_by_location(location,res){

var shows=[];

mongoose.connect(consts.mlab_key);
var conn = mongoose.connection;//get default connection
conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});
conn.once('open',
() => {
Movie.find({location:`${location}`}).find((err,user)=>{
    if(err) console.log(`query error:${err}`);
mongoose.disconnect();
for(let i in user){

    shows[i]=user[i];
        }
res.status(200).json(shows); 
});
});
}
// recieves username and destination response 
// and sends json with all movies related to that user
Get_all_movies_by_user(user,res){

var shows=[];

mongoose.connect(consts.mlab_key);
var conn = mongoose.connection;//get default connection
conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});
conn.once('open',
() => {
Movie.find({user:`${user}`}).sort({upload_date: -1}).exec((err,user)=>{
    if(err) console.log(`query error:${err}`);
mongoose.disconnect();
for(let i in user){

    shows[i]=user[i];
        }
res.status(200).json(shows); 
});
});
}

// recieves band and destination response 
// and sends json with all movies related to that user
Get_all_movies_by_band(band,res){

var shows=[];

mongoose.connect(consts.mlab_key);
var conn = mongoose.connection;//get default connection
conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});
conn.once('open',
() => {
Movie.find({band:`${band}`},(err,user)=>{
    if(err) console.log(`query error:${err}`);
mongoose.disconnect();
for(let i in user){

    shows[i]=user[i];
        }
res.status(200).json(shows); 
});
});
}
// recieves username,location and destination response 
// and sends json with all movies related to that user
Get_all_movies_by_user_and_location(user,location,res){

var shows=[];

mongoose.connect(consts.mlab_key);
var conn = mongoose.connection;//get default connection
conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});
conn.once('open',
() => {
Movie.find({user:`${user}`,location:`${location}`},(err,user)=>{
    if(err) console.log(`query error:${err}`);
mongoose.disconnect();
for(let i in user){

    shows[i]=user[i];
        }
res.status(200).json(shows); 
});
});
}
// recieves band name,location and destination response 
// and sends json with all movies related to that user
Get_all_movies_by_band_and_location(band,location,res){

var shows=[];

mongoose.connect(consts.mlab_key);
var conn = mongoose.connection;//get default connection
conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});
conn.once('open',
() => {
Movie.find({band:`${band}`,location:`${location}`},(err,user)=>{
    if(err) console.log(`query error:${err}`);
mongoose.disconnect();
for(let i in user){

    shows[i]=user[i];
        }
res.status(200).json(shows); 
});
});
}

addVideo(res,name,id,embedded,location,song,band,concert_name,concert_date,user){

var datetime = new Date();



var new_video=new Movie({id:id,name:name,embedded:embedded,location:location,song:song,band:band,concert_name:concert_name,concert_date:concert_date,number_of_views:0,upload_date:datetime.toDateString(),user:user});
mongoose.connect(consts.mlab_key);
var conn = mongoose.connection;

conn.once('open',
() => {
new_video.save(
(err)=>{
    if(err) {
        console.log(err);
        res.status(400).json("fail");
        mongoose.disconnect();
     }
    else{
        console.log("success");
           mongoose.disconnect();
     res.status(200).json("success");
    }
    });
    });
}



/*
Get_movies_by_id(id){

var info;
console.log(id);
for(let i in data)
    if(data[i].id==id) info=data[i];
                 
if(!info) info="no movies were found by id";                 
 return info;   

}

Get_movies_by_years(start,end){
var info;
info=[];
let index=0;
for(let i in data){
 if((data[i].release_year-start>=0)&&(end-data[i].release_year>=0)){
    info[index]=data[i];
    index++;
         }
       }  
if(!info[0]) info="no movies were found between those years";       
 return info;
}
*/
}