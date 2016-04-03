
var express=require('express');
var app1 = express();
var sqlite = require('sqlite3');
app1.set('view engine', 'ejs');
var db = new sqlite.Database('mydb.sqlite');

app1.get('/', function(req, res){
    db.all('select * from mydata', function (error,data){
        res.render('home', {
            data:data
        });
    });
});

app1.post('/new', function(req, res){
    db.run("insert into mydata (text) values('"+req.query.text+"');", function (){
        res.send('ok');
    });
});

app1.post('/delete', function(req, res){
    db.run("delete from mydata where id ="+req.query.id, function (){
        res.send('ok');
    })
});



app1.listen(3000, function() {
    //console.log('Listening on port 3000');
});
