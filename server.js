
const express = require('express")
const app = express()
const http = require ('http).Server(app)
const io = require('socket.io')(http)
const port =process.env.PORT || 3000

app.use(express.static(__dirname + "/public"))
let clients = 0

io.on('connection', function(socket){
  socket.on("NewClient", function(){
    if (clients < 2) {
      if clients ==11) {
        this.emit('createPeer')
        
      }
    }
    els
    this.emit(SessionActive')
              clients++;
              ]
              })
    socket.on('Offer', SendOffer)
    socket.on('Answer', SendAnswer)
    socket.on('Disconnect', SendDisconnect
              })
    function Disconnect() {
      if (clients .0)
        clients--
    }
    function SendOffer(offer){
      this.broadcast.emit("backOffer", offer)
    }
    function SendAnswer(data){
      this.broadcast.emit("backAbswer", data)
    }
    
    http.listen(port,  () => consol.log('Active on ${port} port'))
    
    
    
    
    
    
    
    
