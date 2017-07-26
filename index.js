const express= require('express'),
      bodyParser=require('body-parser'),
      comedy=require('./ws.js'),
      app=express(),
      port= process.env.PORT || 3000;

var vod=new comedy();

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));
      app.use(express.static(`${__dirname}`));

app.use((req,res,next)=>{
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
res.set("Content-Type","application/json");
next();
});
       app.get('/', (req,res) => {
        console.log(`${__dirname}`);
        res.sendFile(`${__dirname}/index.html`);
      });
//get location from client and send the players movies
       app.get('/get_Movies_by_location',(req,res)=>{ 
       console.log(`${req.query.location}`); 
       vod.Get_all_movies_by_location(req.query.location,res); 
        });
//get user name from client and send the players movies
       app.get('/get_Movies_by_user',(req,res)=>{ 
       console.log(`${req.query.user}`); 
       vod.Get_all_movies_by_user(req.query.user,res); 
        });
//get band from client and send the players movies
       app.get('/get_Movies_by_band',(req,res)=>{ 
       console.log(`${req.query.band}`); 
       vod.Get_all_movies_by_band(req.query.band,res); 
        });       
//get user name and location from client and send the players movies     
  app.get('/get_Movies_by_user_and_location',(req,res)=>{ 
       console.log(`${req.query.user}`); 
       console.log(`${req.query.location}`);
       vod.Get_all_movies_by_user_and_location(req.query.user,req.query.location,res); 
        });
//get band and location from client and send the players movies     
  app.get('/get_Movies_by_band_and_location',(req,res)=>{ 
       console.log(`${req.query.band}`); 
       console.log(`${req.query.location}`);
       vod.Get_all_movies_by_band_and_location(req.query.band,req.query.location,res); 
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

      
      