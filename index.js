const express= require('express'),
      bodyParser=require('body-parser'),
      comedy=require('./ws.js'),
      app=express(),
      port= process.env.PORT || 3000;

var vod=new comedy();

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));
      app.use(express.static(`${__dirname}`));
//get location from client and send the players movies
       app.get('/getAllMovies',(req,res)=>{ 
       console.log(`${req.query.location}`); 
       vod.Get_all_movies_by_location(req.query.location,res); 
        });

/*
      app.post('/getMovieData',(req,res)=>{
        console.log('searching by id ${req.body.id}');
        res.status(200).json(vod.Get_movies_by_id(req.body.id));
         console.log('search finished,movie info was sent');
      }); 

      app.post('/getMovieByYears',(req,res)=>{
       res.status(200).json(vod.Get_movies_by_years(req.body.start,req.body.end));
      }); */
      
      app.all('*',(req,res)=>{
        res.status(200).send("function was not found");
      }); 

      app.listen(port,()=>{console.log(`listening to port ${port}`)});

      
      