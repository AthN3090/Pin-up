var express = require('express');
var cors= require('cors');
var request = require('request');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var app = express();
var nodemailer = require('nodemailer');

var count = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.get('/',function(req,res){ //just to check i browser if the server is runnning
    
    res.send("hello");
});

app.post('/', function(req,res){ //listens request coming at port :8000
    
    console.log("\n\nRequest Recieved:\n\n" +req.body.email+"\n"+req.body.url);
    res.sendStatus(200); 
    getCount(req.body.email,req.body.url);  

});
app.listen(8000, function(){
    console.log('listening at port no 8000');
});

function getCount(email, url){
  
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            count = $('a').length;
            console.log("count:"+count);
            console.log(response.statusCode);
            var poll = setInterval(() =>{
                startPolling(email,count,url,poll)
            },10000);
        }

    });
    
};
function startPolling(email, count , url, poll){
  request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            var temp = $('a').length;
            if(temp!=count){
                clearInterval(poll);
                notifyUser(email,url);
            }


            
        }

    });
}
function notifyUser(email,url){

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: "Your email", //your email
          pass: "your password" //you can encrypt this or use a global node variable instead
        }
      });
        const info = transporter.sendMail({
            from:'<yourEmail>',//add your email
            to:email,
            subject:"Greetings from Pin up ",
            text:" Hello "+ email + ". Your Pinned website :- "+url+ " has been updated. Check it out now.",
            html:"<center><h1>Hello "+email+" </h1><center><br><br><h3>Your Pinned Website :<a href="+url+"> "+url+" </a>has been updated. Check it out now.<br><br><h6>Thanks for using pinup</h6>"
            

        });
        console.log("Message sent to : "+email);
    
    
}