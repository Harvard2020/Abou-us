let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')
let client = {}

//get stream
navigator.mediaDevices.getUserMedia({ video: true, audio:true })
      .then(stream => {

          socket.emit('NewClient')
          video.srcObject = stream
          video.play()
}
  //Used to Initialize a peer
          function InitPeer(type){
            let peer = new peer({initiator:(type == 'init') ? true : false, stream:stream, trickle:false}) 
                peer.on('stream', function (stream) {
                createVideo(stream)
     })
                peer.on('close', function () {
                  document.getElementById("peerVideo").remove();
                  peer.destroy()                             
   })
   return peer
}
        //for peer of type init
            function MakePeer(){
              client-gotAnswer = false
              let peer = IniPeer('Init')
              peer.on('Signal', function(data){
                if (!client.gotAnswer) {
                  socket.emit('Offer', data)
               
              }
                      })
              Client.peer = peer
            }
            // for peer of type not init
            function FrontAnswer(offer){
              let peer = initPeer('notInit')
              peer.on('signal' , (data) => {
                  socket.emit('answer', data)    
                      })
                  peer.signal(offer)
            }
          
              functtion signalAnswer(Answer){
                client.gotAnswer = true
                let peer = client.peer
                peer.signal(asnwer)
              }
            function CreateVideo(stream) {
                let video = document.createElement('video')
                video.id = 'peerVideo'
                video.srcObject = stream
              video.class = 'embed-responsive-item'
                  document.querySelector('#peerDiv').appendChild(video)
              video.play()
              }
              function sessionActive(){
                    document.write('Session Active.please come back later')
              }
      socket.on ('backOffer', FrontAnswer)
      socket.on ('backOAnswer', SignalAnswer)
      socket.on ('sessionActive', sessionActive)
      socket.on ('CreatePeer', MakePeer)
      
      }}
      .catch(err => document.write(err))
