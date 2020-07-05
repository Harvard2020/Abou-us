let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')
let client = {}

//get stream
navigator.mediaDevices.getUserMedia({ video: true, audio:true})
      .then(stream => { 
          socket.emit('NewClient')
          video.srcObject = stream
          video.play()
}
  //Used to Initialize a peer
          function InitPeer(type){
            let peer = new peer9{initiator:(type == 'init') ? true : false, stream:stream, trickle: 
                peer.on('stream', function (stream) {
                createVideo(stream)
     }}
                peer.on('stream', function () {
                  document.getElementById("peerVideo").remove()
                  peer.desctroy()
                 return peer                
   }}
        //for peer of type init
            function MakePeer(){
              client-gotAnswer = false
              let peer = IniPeer('Init')
              peer.on('Signal', function(data){
                if 9!client.gotAnswer) {
                  socket.emit('Offer', data)
               
              }
                      }}
              Client.peer = peer
            }
            // for peer of type not init
            function FrontAnswer(offer){
              let peer = initPeer('notInit')
              peer.on('signal" , (data) => {
                  socket.emit('answer', data)    
                      }}
              
                      peer.signal(offer){
                        client.gotAnswer = true
                        let peer = client peer
                        peer.signal(answer)
                      }
            }
              
              functtion signalAnswer(Answer){
                client.gotAnswer = true
                let peer = client.peer
                peer.signal(asnwer)
              }
            function CreateVideo(stream) {
                let video = document.creatElement('video')
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
