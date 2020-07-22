var app = express();
-
+var server = http.createServer(app);
+var io = require('socket.io').listen(server);
 app.configure(function () {
     app.set('port', process.env.PORT || 3000);
     app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
@@ -18,6 +19,6 @@ app.post('/wines', wine.addWine);
 app.put('/wines/:id', wine.updateWine);
 app.delete('/wines/:id', wine.deleteWine);

-http.createServer(app).listen(app.get('port'), function () {
+server.listen(app.get('port'), function () {
     console.log("Express server listening on port " + app.get('port'));
 });
        
var server = require('http').createServer();
var app = server.listen(1337);
var io = require('socket.io').listen(app);

io.sockets.on('connection' , function(socket) {
socket.on('message' , function(message) {
socket.broadcast.emit('message', message);
)}
        
};

<script src="http://192.168.1.3:1337/socket.io/socket.io.js">
</script>

var socket.on('connect' , onChannelOpened);
function onChannelOpened(evt){
channelReady = true;
}
  
function createPeerConnection() {
var pc_config = {"iceServers":[]};
peerConn = new RTCPeerConnection(pc_config);
peerConn.onicecandidate = function (evt) {
socket.json.send({type: "candidate" , evt.candidate});
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
     
