var mongoose = require('mongoose'),
    consts=require('./data/const.js');
    


mongoose.connect(consts.mlab_key);
var conn = mongoose.connection;//get default connection
var Movie=require('./movieB.js');
conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});
conn.once('open',
() => {
console.log('connected');

Movie.find({},(err,user)=>{
    if(err) console.log(`query error:${err}`);
    console.log(user);
  //  mongoose.disconnect();
});
/*Movie.find({id:2},(err,user)=>{
    if(err) console.log(`query error:${err}`);
    console.log(user);
    mongoose.disconnect();
});*/
/*Movie.find({release_year:{$gt:2012 ,$lt:2018}},(err,user)=>{
    if(err) console.log(`query error:${err}`);
    console.log(user);
    mongoose.disconnect();
});*/
});