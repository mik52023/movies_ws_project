var mongoose = require('mongoose'),
    consts=require('./data/const.js');  
var Movie=require('./movieB.js');

module.exports= class comedy_vod
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
Movie.find({location:`${location}`},(err,user)=>{
    if(err) console.log(`query error:${err}`);
mongoose.disconnect();
for(let i in user){

    shows[i]=user[i];
        }
res.status(200).json(shows); 
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