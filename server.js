var express = require('express'); 
const bodyParser = require(`body-parser`);

var app = express();
app.use(express.static(__dirname));
app.engine('html',require ('ejs').renderFile);
app.set('view engine','html');
app.set('views',`${__dirname}/views`);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/',function(req,res){
  console.log(`here`)
  res.render("index2");
});

app.post('/', function(req, res){


  console.log('hello');
});

app.listen(3001);
console.log(`listening on port 3000`);

// var knex = require('knex')({
//   client : 'rishabh',
//   connection:{
//     filename:'./db.pg'

//   }
// });

// var bookshelf=require('bookshelf')(knex);


