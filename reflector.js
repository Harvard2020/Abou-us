
        
var server = require('http').createServer();
var app = server.listen(1337);
var io = require('socket.io').listen(app);

io.sockets.on('connection' , function(socket) {
socket.on ('message' , function(message) {
socket.broadcast.emit('message', message);          
       }
           )
}
          );

<script src="http://socket.io/socket.io.js">
</script>

var socket.on('connect' , onChannelOpened);
function onChannelOpened(evt){
channelReady = true;
}
  
function createPeerConnection() {
var pc_config = {"iceServers":[]};
peerConn = new RTCPeerConnection(pc_config);
peerConn.onicecandidate = function (evt) {
socket.json.send ({type: "candidate" , evt.candidate});
};
peerConn.onaddstream = function (evt) {
remotevid.src = windows.URL.createObjectURL(evt.stream):
};
peerConn.addStream(localStream);
}
var mediaConstraints = {'mandatory': {
                        'OfferToReceiveAudio':true,
                        'OfferToReceiveVideo':true}};
 
 function setLocalAndSendMessage(sessionDescription){
 socket.json.send(sessionDescription);
 }
 peerConn.createOffer(setLocalAndSendMessage,
                      errorCallback,
                      mediaConstraints);
     socket.on('message' , onMessage);
   
  function onMessage(evt) {
     if (evt.type === 'offer') {
     if (!started) {
     createPeerConnection()
     started = true;
     }
     peerConn.setRemoteDescription(new RTCSessionDescription();
     peerConn.createAnswer (setLocalAndSendMessage,
                             errorCallback,
                            mediaConstraints);
      } 
       
      else if (evt.type === 'answer' && started) {
      peerConn.setRemoteDescription(new RTCSessionDescription();
      } 
                                    
      else if (evt.type ==='candidate' && started) {
      var candidate = new RTCIceCandidate(evt.candidate);
      peerConn.addIceCandidate(candidate);
      }
      }
     
