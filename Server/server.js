const express = require('express');
const mysql2 =require ('mysql2');
const cors =require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');




const saltRounds =10;

const app =express();
app.use(express.json()); 

const corsOptions={
    origin:['http://localhost:3000'],
    methods: ["GET" , "POST"],
    credentials: true ,
};
app.use(cors(corsOptions));


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  key:"userId",
  secret:"daenerys",
  resave : false,
  saveUninitialized:false,
  cookie: {
    expires : 60 * 60 * 24,
  }
}));

const db = mysql2.createConnection({
  user :"root",
  port: 3306,
  host :'127.0.0.1',
  password :"diya1234@",
  database:"Movies1",
});
app.post('/register', (req,res) =>{
  const username = req.body.username
  const password = req.body.password

  bcrypt.hash(password , saltRounds, (err,hash) => {
    if (err){
      console.log(err)
    }
    
    db.query("INSERT INTO userinfo (username , password) VALUES (?,?)",[username ,hash],(err,result) =>{
      if (err) return res.json({Error: "Inserting data error in server"});
      return res.json({Status:"Success"});
  
    }
    );

  })
});

app.get("/login" ,(req,res)=>{
  if(req.session.user){
    res.send({loggedIn: true , user:req.session.user});

  }
  else{
    res.send({loggedIn: false})
  }
  console.log(req.cookies);
}
)

app.post('/login', (req,res) =>{
  const username = req.body.username
  const password = req.body.password
  
  db.query("SELECT * FROM userinfo WHERE username=? ;",
  username ,
  (err,result) =>{
    if(err){
      res.send({err : err});
    }

    if(result.length >0 ){
      bcrypt.compare(password, result[0].password , (error,response)=>{
        if(response){
          req.session.user =result;
          console.log(req.session.user);
          res.send({ loggedIn: true, username: result[0].username }); 
        }
        else {
          res.send ({ loggedIn: false,message:"Wrong username or password!"});
        }
      })
    }else{
      res.send ({message:"User doesnt exist"});
    }
  }
  );
});

  
app.post('/mainpage', (req, res) => {
  const { postId, likeCount } = req.body;
  // Here, you can update the database with the new like count for the specific post ID
  // For example, using your MySQL connection:
  db.query('UPDATE tableforpost SET likeCount = ? WHERE id = ?', [likeCount, postId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Failed to update like count.' });
    }
    return res.status(200).json({ message: 'Like count updated successfully.' });
  });
});
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to MySQL Server!");
});
app.listen(3006, ()=> {
  console.log("Server started on port: ");
});
