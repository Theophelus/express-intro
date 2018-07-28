const express = require('express');
const exphbs = require('express-handlebars'); 
//initialise express method
const app =  express();
//configure express-handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
// use GEt request module to render data from home
app.get('/', function (req, res) {
    res.render('home', {title:'Handlebars view for express', condition: true, myArr: [1, 2, 3] });
});

let port = process.env.port || 3007;

app.listen(port, function(){
    console.log('App starting at port', port);
});