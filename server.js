
const express = require('express")
const app = express()
const http = require ('http).Server(app)
const io = require('socket.io')(http)
const port =process.env.PORT || 3000

var express = require('express')
  , http = require('http');
//make sure you keep this order
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

//... 

server.listen(8000);


app.use(express.static(__dirname + "/public"))
let clients = 0

io.on('connection', function(socket){
  socket.on("NewClient", function(){
    if (clients < 2) {
      if clients ==1) {
        this.emit('createPeer')
        
      }
    }
    else
    this.emit(SessionActive')
              clients++;
              })
    socket.on('Offer', SendOffer)
    socket.on('Answer', SendAnswer)
    socket.on('disconnect', Disconnect
              })
    function Disconnect() {
      if (clients >0)
        clients--
    }
    function SendOffer(offer){
      this.broadcast.emit("backOffer", offer)
    }
    function SendAnswer(data){
      this.broadcast.emit("backAbswer", data)
    }
    
    http.listen(port,  () => consol.log('Active on ${port} port'))
    
    
    
   
    
    
    
    
    
    
